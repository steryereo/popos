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
@property (strong, nonatomic) NSMutableArray *allPopos;
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
    self.navigationController.navigationBarHidden = NO;
    self.navigationController.navigationBar.tintColor = [UIColor blackColor];
    [super viewDidLoad];
    RMMapBoxSource *onlineSource = [[RMMapBoxSource alloc] initWithMapID:@"bdon.popos-yellow"];
    RMMapView *mapView = [[RMMapView alloc] initWithFrame:self.view.bounds andTilesource:onlineSource];

    mapView.zoom = 17;
    mapView.centerCoordinate = CLLocationCoordinate2DMake(37.7920,-122.399);
    mapView.autoresizingMask = UIViewAutoresizingFlexibleHeight | UIViewAutoresizingFlexibleWidth;
    [self.view addSubview:mapView];
    mapView.delegate = self;
    
    
    NSString * resourcePath = [[NSBundle mainBundle] resourcePath];
    NSString* jsonFile = [resourcePath stringByAppendingPathComponent:@"popos.json"];
    NSData* data = [NSData dataWithContentsOfFile:jsonFile];
    
    NSError *charError = nil;
    NSDictionary* popos = [NSJSONSerialization JSONObjectWithData:data options:kNilOptions error:&charError];
    
    self.allPopos = [[NSMutableArray alloc] init];

    for (NSDictionary *popoDict in popos[@"features"]) {
        NSArray *coords = popoDict[@"geometry"][@"coordinates"];
        
        NSString *poposName = popoDict[@"properties"][@"NAME"];
        if ([poposName isKindOfClass:[NSNull class]]) {
            poposName = @"Unknown";
        }
        
        NSString *hours = popoDict[@"properties"][@"HOURS"];
        if ([hours isKindOfClass:[NSNull class]]) {
            hours = @"Unknown";
        }
        
        NSString *description = popoDict[@"properties"][@"Descriptio"];
        if ([description isKindOfClass:[NSNull class]]) {
            description = @"We don't have directions to this place!";
        }

        Popo *popo = [[Popo alloc] initWithCoordinate:CLLocationCoordinate2DMake([coords[1] floatValue],[coords[0] floatValue]) hours:hours description:description name:poposName];
        [self.allPopos addObject:popo];

        RMAnnotation *annotation = [RMAnnotation annotationWithMapView:mapView coordinate:popo.coord andTitle:popo.name];
        
        annotation.userInfo = popo;
        
        [mapView addAnnotation:annotation];
    }
}

- (RMMapLayer *)mapView:(RMMapView *)mapView layerForAnnotation:(RMAnnotation *)annotation
{
//    RMMarker *marker = [[RMMarker alloc] initWithUIImage:[UIImage imageNamed:@"map-marker"]];
//   
    RMMarker *marker = [[RMMarker alloc] initWithMapBoxMarkerImage];
    marker.canShowCallout = YES;
    UIButton *theButton = [UIButton buttonWithType:UIButtonTypeDetailDisclosure];
    marker.rightCalloutAccessoryView = theButton;

    return marker;
}

- (void)tapOnCalloutAccessoryControl:(UIControl *)control forAnnotation:(RMAnnotation *)annotation onMap:(RMMapView *)map
{
    PoposDetailViewController *detailController = [[PoposDetailViewController alloc] init];
    detailController.popo = annotation.userInfo;
    detailController.navigationItem.title = detailController.popo.name;
    [self.navigationController pushViewController:detailController animated:YES];

}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (void)mapView:(RMMapView *)mapView didSelectAnnotation:(RMAnnotation *)annotation {
}

@end
