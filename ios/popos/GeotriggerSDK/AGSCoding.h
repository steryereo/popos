//
//  AGSCoding.h
//  GeotriggerSDK
//
//  Created by Ryan Arana on 4/3/13.
//  Copyright (c) 2013 ESRI. All rights reserved.
//

@protocol AGSCoding <NSObject>
@required
- (id)initWithJSON:(NSDictionary *)json;
- (NSDictionary *)encodeToJSON;
- (void)decodeWithJSON:(NSDictionary *)json;
@end
