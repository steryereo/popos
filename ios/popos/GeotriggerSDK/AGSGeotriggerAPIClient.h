//
//  AGSGeotriggerAPIClient.h
//  GeotriggerSDK
//
//  Created by Jen on 3/18/13.
//  Copyright (c) 2013 ESRI. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "AGSPortalDevice.h"

@interface AGSGeotriggerAPIClient : NSObject

@property (nonatomic, strong, readonly) AGSPortalDevice *device;
@property (nonatomic, strong, readonly) NSString *baseUrl;

/* 
 * If device is not ready, you'll get nil back!
 */
- (id)initWithBaseUrl:(NSString *)baseUrl andDevice:(AGSPortalDevice *)device;
- (id)initWithDevice:(AGSPortalDevice *)device;

- (NSOperation *)runPost:(NSString *)path
          withParameters:(NSDictionary *)parameters
                 success:(void (^)(NSURLRequest *, NSHTTPURLResponse *, id))successBlock
                 failure:(void (^)(NSURLRequest *, NSHTTPURLResponse *, NSError *, id))failureBlock;
- (NSOperation *)runGet:(NSString *)path
         withParameters:(NSDictionary *)parameters
                success:(void (^)(NSURLRequest *, NSHTTPURLResponse *, id))successBlock
                failure:(void (^)(NSURLRequest *, NSHTTPURLResponse *, NSError *, id))failureBlock;
- (NSOperation *)runRequest:(NSString *)method
                   withPath:(NSString *)path
              andParameters:(NSDictionary *)parameters
                    success:(void (^)(NSURLRequest *, NSHTTPURLResponse *, id))successBlock
                    failure:(void (^)(NSURLRequest *, NSHTTPURLResponse *, NSError *, id))failureBlock;

@end
