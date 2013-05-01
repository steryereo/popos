//
//  AGSGeotriggerLocationTask.h
//  GeotriggerSDK
//
//  Created by Ryan Arana on 4/3/13.
//  Copyright (c) 2013 ESRI. All rights reserved.
//

#import "AGSGeotriggerBaseTask.h"
#import "AGSGeotriggerLocation.h"

@interface AGSGeotriggerLocationTask : AGSGeotriggerBaseTask

- (NSOperation *)postLocationUpdate:(AGSGeotriggerLocation *)location
                            success:(void (^)(NSURLRequest *, NSHTTPURLResponse *, id))successBlock
                            failure:(void (^)(NSURLRequest *, NSHTTPURLResponse *, NSError *, id))failureBlock;

- (NSOperation *)postLocationUpdate:(AGSGeotriggerLocation *)location
                   previousLocation:(AGSGeotriggerLocation *)previous
                            success:(void (^)(NSURLRequest *, NSHTTPURLResponse *, id))successBlock
                            failure:(void (^)(NSURLRequest *, NSHTTPURLResponse *, NSError *, id))failureBlock;

- (NSOperation *)postLocationUpdates:(NSArray *)locations
                             success:(void (^)(NSURLRequest *, NSHTTPURLResponse *, id))successBlock
                             failure:(void (^)(NSURLRequest *, NSHTTPURLResponse *, NSError *, id))failureBlock;

- (NSOperation *)postLocationUpdates:(NSArray *)locations
                    previousLocation:(AGSGeotriggerLocation *)previous
                             success:(void (^)(NSURLRequest *, NSHTTPURLResponse *, id))successBlock
                             failure:(void (^)(NSURLRequest *, NSHTTPURLResponse *, NSError *, id))failureBlock;
@end
