//
//  MapViewController.m
//  popos
//
//  Created by Brandon Liu on 4/20/13.
//  Copyright (c) 2013 Brandon Liu. All rights reserved.
//

#import "MapViewController.h"
#import <MapBox/MapBox.h>
#import <MapBox/RMFoundation.h>
#import <MapBox/RMMarker.h>
#import "Popo.h"
#import "PoposDetailViewController.h"

@interface MapViewController ()

@end

@implementation MapViewController

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        // Custom initialization
    }
    return self;
}

- (void)viewDidLoad
{
    [super viewDidLoad];
    RMMapBoxSource *onlineSource = [[RMMapBoxSource alloc] initWithMapID:@"bdon.popos-small"];
    RMMapView *mapView = [[RMMapView alloc] initWithFrame:self.view.bounds andTilesource:onlineSource];

    mapView.zoom = 17;
    mapView.autoresizingMask = UIViewAutoresizingFlexibleHeight | UIViewAutoresizingFlexibleWidth;
    [self.view addSubview:mapView];
    mapView.delegate = self;
    
    
    NSString * resourcePath = [[NSBundle mainBundle] resourcePath];
    NSString* jsonFile = [resourcePath stringByAppendingPathComponent:@"popos.json"];
    NSData* data = [NSData dataWithContentsOfFile:jsonFile];
    
    NSError *charError = nil;
    NSDictionary* popos = [NSJSONSerialization JSONObjectWithData:data options:kNilOptions error:&charError];

    for (NSDictionary *popoDict in popos[@"features"]) {
        NSArray *coords = popoDict[@"geometry"][@"coordinates"];
        NSString *hours = popoDict[@"properties"][@"HOURS"];
        if ([hours isEqual:[NSNull null]]) {
            NSLog(@"================> %@", @"Found null");
            hours = @"Unknown";
        }

        Popo *popo = [[Popo alloc] initWithCoordinate:CLLocationCoordinate2DMake([coords[1] floatValue],[coords[0] floatValue]) hours:hours];

        RMAnnotation *annotation = [RMAnnotation annotationWithMapView:mapView coordinate:popo.coord andTitle:@"foo"];
        annotation.userInfo = popo;
        
        [mapView addAnnotation:annotation];
    }
}

- (RMMapLayer *)mapView:(RMMapView *)mapView layerForAnnotation:(RMAnnotation *)annotation
{
    RMMarker *marker = [[RMMarker alloc] initWithMapBoxMarkerImage];
   
    marker.canShowCallout = YES;
    UIButton *theButton = [UIButton buttonWithType:UIButtonTypeDetailDisclosure];
    marker.rightCalloutAccessoryView = theButton;

    return marker;
}

- (void)tapOnCalloutAccessoryControl:(UIControl *)control forAnnotation:(RMAnnotation *)annotation onMap:(RMMapView *)map
{
    NSLog(@"================> %@", @"SELECTED");
    PoposDetailViewController *detailController = [[PoposDetailViewController alloc] init];
    [self.navigationController pushViewController:detailController animated:YES];
    detailController.popo = annotation.userInfo;
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (void)mapView:(RMMapView *)mapView didSelectAnnotation:(RMAnnotation *)annotation {
    NSLog(@"================> %@", @"Selected");
}

@end
