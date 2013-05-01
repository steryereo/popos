//
//  AGSGeotriggerLocation.h
//  GeotriggerSDK
//
//  Created by Ryan Arana on 4/3/13.
//  Copyright (c) 2013 ESRI. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <CoreLocation/CLLocation.h>

@interface AGSGeotriggerLocation : NSObject <AGSCoding>

@property (strong, nonatomic) CLLocation *location;
@property (strong, nonatomic) NSString *planet;
@property (strong, nonatomic) NSDictionary *properties;
@property (strong, nonatomic, readonly) NSString *identifier;

- (id)initWithLocation:(CLLocation *)location;
@end
