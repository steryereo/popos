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

- (id)initWithCoordinate:(CLLocationCoordinate2D)coord hours:(NSString *)hours;

@property (assign, nonatomic) CLLocationCoordinate2D coord;
@property (assign, nonatomic) NSString *hours;

@end
