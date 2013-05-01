//
//  AGSPortalDevice.h
//  GeotriggerSDK
//
//  Created by Ryan Arana on 3/14/13.
//  Copyright (c) 2013 ESRI. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "AFNetworking.h"

typedef NS_ENUM(NSInteger, AGSPushNotificationEnvironment) {
    AGSPushNotificationEnvironmentSandbox = 0,
    AGSPushNotificationEnvironmentProduction = 1
};

@class AGSPortalDevice;

@protocol AGSPortalDeviceDelegate <NSObject>
@optional
- (void)didRegisterDevice:(AGSPortalDevice *)device withError:(NSError *)error;
- (void)didRefreshTokenForDevice:(AGSPortalDevice *)device withError:(NSError *)error;
- (void)didRegisterDeviceTokenForDevice:(AGSPortalDevice *)device withError:(NSError *)error;
- (void)deviceBecameReady:(AGSPortalDevice *)device;
@end

@interface AGSPortalDevice : NSObject <AGSCoding>

@property (nonatomic, strong) NSString *accessToken;
@property (nonatomic, strong) NSString *clientID;
@property (nonatomic, strong) NSString *refreshToken;
@property (nonatomic, strong) NSString *deviceID;
@property (nonatomic, strong) NSDate *expiresAt;
@property (nonatomic, weak) id<AGSPortalDeviceDelegate> delegate;
@property (readonly) AFHTTPClient *httpClient;

@property (readonly) BOOL isReady;

- (id)initWithClientID:(NSString *)iniClientID;
- (id)initWithClientID:(NSString *)iniClientID andDelegate:(id<AGSPortalDeviceDelegate>)iniDelegate;
- (id)initWithClientID:(NSString *)iniClientID
           andDelegate:(id<AGSPortalDeviceDelegate>)iniDelegate
        andAccessToken:(NSString *)iniAccessToken
       andRefreshToken:(NSString *)iniRefreshToken;
- (id)initWithClientID:(NSString *)iniClientID
        andAccessToken:(NSString *)iniAccessToken
       andRefreshToken:(NSString *)iniRefreshToken;
- (id)initWithJSON:(NSDictionary *)json;

- (NSOperation *)registerDeviceWithServer;
- (NSOperation *)refreshDevice;
- (NSOperation *)refreshDeviceWithSuccessBlock:(void (^)(NSURLRequest *, NSHTTPURLResponse *, NSDictionary *))successBlock
                               andFailureBlock:(void (^)(NSURLRequest *, NSHTTPURLResponse *, NSError *, NSDictionary *))failureBlock;

- (void)registerForPushNotifications:(UIRemoteNotificationType)types;
- (NSOperation *)registerDeviceToken:(NSData *)deviceToken withMode:(AGSPushNotificationEnvironment)environment;

- (NSDictionary *)encodeToJSON;
- (void)decodeWithJSON:(NSDictionary *)json;

- (void)saveDeviceToUserDefaults;
- (BOOL)loadDeviceFromUserDefaults;

@end
