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
    
    NSString* artJsonFile = [resourcePath stringByAppendingPathComponent:@"points.json"];
    NSData* artData = [NSData dataWithContentsOfFile:artJsonFile];
    
    NSError *charError1 = nil;
    NSDictionary* publicArts = [NSJSONSerialization JSONObjectWithData:artData options:kNilOptions error:&charError1];
    for (NSDictionary *a in publicArts[@"features"]) {
       
        CLLocationCoordinate2D coord = CLLocationCoordinate2DMake([a[@"geometry"][@"coordinates"][1] floatValue], [a[@"geometry"][@"coordinates"][0] floatValue]);
        RMAnnotation *annotation = [RMAnnotation annotationWithMapView:mapView coordinate:coord andTitle:@""];
        
        annotation.userInfo = [[NSMutableDictionary alloc] init];
        annotation.userInfo[@"type"] = @"Art";
        [mapView addAnnotation:annotation];
        
    }
    
    
    
    

    
    NSString* jsonFile = [resourcePath stringByAppendingPathComponent:@"popos.json"];
    NSData* data = [NSData dataWithContentsOfFile:jsonFile];
    
    NSError *charError = nil;
    NSDictionary* popos = [NSJSONSerialization JSONObjectWithData:data options:kNilOptions error:&charError];
    
    self.allPopos = [[NSMutableArray alloc] init];

    for (NSDictionary *popoDict in popos) {
        NSArray *coords = @[popoDict[@"latitude"],popoDict[@"longitude"]];
    
        
        NSString *poposName = popoDict[@"name"];
        if ([poposName isKindOfClass:[NSNull class]]) {
            poposName = @"Unknown";
        }
        
        NSString *hours = popoDict[@"open_times"];
        if ([hours isKindOfClass:[NSNull class]]) {
            hours = @"Unknown";
        }
        
        NSString *description = popoDict[@"description"];
        if ([description isKindOfClass:[NSNull class]]) {
            description = @"We don't have directions to this place!";
        }
        
        NSString *imageUrl = popoDict[@"pic_1"];
        
        NSString *rating = popoDict[@"spur_rating"];
        if (![rating isKindOfClass:[NSNull class]] && ([rating isEqualToString:@"excellent"] || [rating isEqualToString:@"fair/excellent"])) {
            Popo *popo = [[Popo alloc] initWithCoordinate:CLLocationCoordinate2DMake([coords[1] floatValue],[coords[0] floatValue]) hours:hours description:description name:poposName imageUrl:imageUrl];
            [self.allPopos addObject:popo];
            
            RMAnnotation *annotation = [RMAnnotation annotationWithMapView:mapView coordinate:popo.coord andTitle:popo.name];
            
            annotation.userInfo = [[NSMutableDictionary alloc] init];
            annotation.userInfo[@"popo"] = popo;
            annotation.userInfo[@"type"] = @"Popo";
            
            [mapView addAnnotation:annotation];
        }
    }
}

- (RMMapLayer *)mapView:(RMMapView *)mapView layerForAnnotation:(RMAnnotation *)annotation
{
//    RMMarker *marker = [[RMMarker alloc] initWithUIImage:[UIImage imageNamed:@"map-marker"]];
//
    if ([annotation.userInfo[@"type"] isEqualToString:@"Popo"]) {
        RMMarker *marker = [[RMMarker alloc] initWithMapBoxMarkerImage];
        marker.canShowCallout = YES;
        UIButton *theButton = [UIButton buttonWithType:UIButtonTypeDetailDisclosure];
        marker.rightCalloutAccessoryView = theButton;

        return marker;
    } else {
        NSLog(@"================> %@", @"Drawing art");
        RMMarker *marker = [[RMMarker alloc] initWithUIImage:[UIImage imageNamed:@"art-shape"]];
        return marker;
    }
}

- (void)tapOnCalloutAccessoryControl:(UIControl *)control forAnnotation:(RMAnnotation *)annotation onMap:(RMMapView *)map
{
    PoposDetailViewController *detailController = [[PoposDetailViewController alloc] init];
    detailController.popo = annotation.userInfo[@"popo"];
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
