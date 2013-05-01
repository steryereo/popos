//
//  AGSGeotriggerBaseTask.h
//  GeotriggerSDK
//
//  Created by Ryan Arana on 4/3/13.
//  Copyright (c) 2013 ESRI. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "AGSPortalDevice.h"
#import "AGSGeotriggerAPIClient.h"

@interface AGSGeotriggerBaseTask : NSObject

- (id)initWithDevice:(AGSPortalDevice *)device;

// These should all be implemented in a subclass. By default they will forward directly to their client counterpart.
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
