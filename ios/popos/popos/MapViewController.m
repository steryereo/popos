//
//  MapViewController.m
//  popos
//
//  Created by Brandon Liu on 4/20/13.
//  Copyright (c) 2013 Brandon Liu. All rights reserved.
//

#import "MapViewController.h"
#import <MapBox/MapBox.h>

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
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
