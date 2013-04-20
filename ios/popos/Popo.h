//
//  Popo.h
//  MapBox Example
//
//  Created by Brandon Liu on 4/20/13.
//  Copyright (c) 2013 MapBox / Development Seed. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <CoreLocation/CoreLocation.h>

@interface Popo : NSObject

- (id)initWithCoordinate:(CLLocationCoordinate2D)coord hours:(NSString *)hours description:(NSString *)description;

@property (assign, nonatomic) CLLocationCoordinate2D coord;
@property (strong, nonatomic) NSString *hours;
@property (strong, nonatomic) NSString *description;

@end
