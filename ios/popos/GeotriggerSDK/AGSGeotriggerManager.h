//
//  AGSGeotriggerManager.h
//  GeotriggerSDK
//
//  Created by Ryan Arana on 3/19/13.
//  Copyright (c) 2013 ESRI. All rights reserved.
//

#import <CoreLocation/CoreLocation.h>
#import "AGSLocationManager.h"
#import "AGSPortalDevice.h"
#import "AGSGeotriggerLocation.h"

@class AGSGeotriggerManager;

@protocol AGSGeotriggerManagerDelegate<AGSLocationManagerDelegate>
@optional
/*
 * This will be called when a device that responds YES to isReady is assigned to the manager's device property,
 * regardless of whether that device was passed in at init time, pulled from NSUserDefaults, or came from the server
 * after a successful registration. When this method is called the manager is fully prepared to track location updates
 * and post them to the server.
 */
- (void)managerDidBecomeReady:(AGSGeotriggerManager *)manager;

/*
 * This will be called if a new device is registered with the server. Error will be nil on successful registration.
 */
- (void)manager:(AGSGeotriggerManager *)manager didRegisterDeviceWithError:(NSError *)error;

- (void)manager:(AGSGeotriggerManager *)manager didUploadLocations:(NSArray *)locations withError:(NSError *)error;
@end

@interface AGSGeotriggerManager : AGSLocationManager<AGSPortalDeviceDelegate>

@property (strong, nonatomic, readonly) AGSPortalDevice *device;
@property (nonatomic, readonly) BOOL isReady;
@property (weak, nonatomic) id<AGSGeotriggerManagerDelegate> delegate;
@property (strong, nonatomic, readonly) NSArray *queuedLocationUpdates;
@property (strong, nonatomic, readonly) CLLocation *lastSyncedLocation;

/*
 * You can pass in nil for the delegate in all of the contructors. It is provided so that your app can do anything it
 * needs to do after the manager is ready to track.
 */

/*
 * The manager will create an AGSDevice using the clientID pulling it from NSUserDefaults, or registering with the server
 * if one is not found.
 */
- (id)initWithClientID:(NSString *)clientID andDelegate:(id<AGSGeotriggerManagerDelegate>)delegate;
/*
 * When passing in a profile, the manager will start tracking with that profile as soon as it is ready.
 */
- (id)initWithClientID:(NSString *)clientID andDelegate:(id<AGSGeotriggerManagerDelegate>)delegate andProfile:(AGSTrackingProfile)profile;

/*
 * These constructors allow you to prepare your own AGSPortalDevice before hand and pass it in, they are otherwise
 * identical to the clientID constructors.
 */
- (id)initWithDevice:(AGSPortalDevice *)iniDevice andDelegate:(id<AGSGeotriggerManagerDelegate>)delegate;
- (id)initWithDevice:(AGSPortalDevice *)iniDevice andDelegate:(id<AGSGeotriggerManagerDelegate>)delegate andProfile:(AGSTrackingProfile)profile;

- (void)enqueueLocationUpdate:(AGSGeotriggerLocation *)update;

- (void)enqueueLocationUpdate:(AGSGeotriggerLocation *)update
                      success:(void (^)(NSURLRequest *, NSHTTPURLResponse *, NSDictionary *))successBlock
                      failure:(void (^)(NSURLRequest *, NSHTTPURLResponse *, NSError *, NSDictionary *))failureBlock;

- (void)uploadLocationQueueIfNecessary;

- (void)uploadLocationQueueIfNecessaryWithSuccessBlock:(void (^)(NSURLRequest *, NSHTTPURLResponse *, NSDictionary *))successBlock
                                       andFailureBlock:(void (^)(NSURLRequest *, NSHTTPURLResponse *, NSError *, NSDictionary *))failureBlock;

- (void)uploadLocationQueue;

- (void)uploadLocationQueueWithSuccessBlock:(void (^)(NSURLRequest *, NSHTTPURLResponse *, NSDictionary *))successBlock
                            andFailureBlock:(void (^)(NSURLRequest *, NSHTTPURLResponse *, NSError *, NSDictionary *))failureBlock;

- (void)stopMonitoringAllRegionsExceptFor:(NSDictionary *)regions;

- (void)registerForPushNotifications:(UIRemoteNotificationType)types;
- (NSOperation *)registerDeviceToken:(NSData *)deviceToken withMode:(AGSPushNotificationEnvironment)environment;
@end
