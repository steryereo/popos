//
//  AGSLocationManager.h
//  GeotriggerSDK
//
//  Created by Ryan Arana on 3/19/13.
//  Copyright (c) 2013 ESRI. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <CoreLocation/CoreLocation.h>

typedef NS_ENUM(NSInteger, AGSTrackingProfile) {
    /*
     Tracking is off.
     */
    AGSTrackingProfileOff = 0,

    /*
     Only gather "rough" location data, useful for getting city or neighborhood-level accuracy. Will only use the
     "significant location change" mode available in iOS, and never turn GPS on.
     */
    AGSTrackingProfileRough = 1,

    /*
     The lowest useful data quality.
     Device may be either in a battery-saving mode when possible, or use more accurate location tracking when near
      points of interest.
     */
    AGSTrackingProfileAdaptive = 2,

    /*
     The highest quality, most real-time data available.
     */
    AGSTrackingProfileFine = 3,
};

typedef NS_ENUM(NSInteger, AGSRegionHoppingState) {
    AGSRegionHoppingStateDisabled = 0,
    AGSRegionHopingStateAcquiringFix = 1,
    AGSRegionHopingStateWaitingForGeofence = 2
};


@class AGSLocationManager;

@protocol AGSLocationManagerDelegate<NSObject>
@optional
- (void)manager:(AGSLocationManager *)manager didChangeLocationTo:(CLLocation *)newLocation from:(CLLocation *)oldLocation;
- (void)manager:(AGSLocationManager *)manager willChangeProfileTo:(AGSTrackingProfile)newProfile from:(AGSTrackingProfile)oldProfile;
- (void)manager:(AGSLocationManager *)manager didChangeProfile:(AGSTrackingProfile)newProfile;
@end

@interface AGSLocationManager : NSObject <CLLocationManagerDelegate>

@property (nonatomic) AGSTrackingProfile profile;
@property (nonatomic, strong, readonly) CLLocation *lastLocation;
@property (nonatomic, weak) id<AGSLocationManagerDelegate> delegate;
@property (strong, nonatomic) CLLocationManager *locationManager;
@property (nonatomic) AGSRegionHoppingState currentRegionHoppingState;
@property (strong, nonatomic) NSNumber *currentHopDistance;


+ (NSString *)stringFromProfile:(AGSTrackingProfile)profile;
+ (AGSTrackingProfile)profileFromString:(NSString *)profileString;

- (id)initWithDelegate:(id<AGSLocationManagerDelegate>)delegate;
- (NSString *)profileAsString;
@end
