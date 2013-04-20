//
//  Popo.m
//  MapBox Example
//
//  Created by Brandon Liu on 4/20/13.
//  Copyright (c) 2013 MapBox / Development Seed. All rights reserved.
//

#import "Popo.h"

@implementation Popo

- (id)initWithCoordinate:(CLLocationCoordinate2D)coord hours:(NSString *)hours description:(NSString *)description name:(NSString *)name{
    self = [super init];
    if (self) {
        self.coord = coord;
        self.hours = hours;
        self.description = description;
        self.name = name;
    }
    return self;
}

@end
