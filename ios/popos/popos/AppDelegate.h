//
//  AppDelegate.h
//  popos
//
//  Created by Brandon Liu on 4/20/13.
//  Copyright (c) 2013 Brandon Liu. All rights reserved.
//

#import "GeotriggerSDK.h"
#import <UIKit/UIKit.h>

@interface AppDelegate : UIResponder <UIApplicationDelegate, AGSGeotriggerManagerDelegate>

@property (strong, nonatomic) UIWindow *window;

@property (readonly, strong, nonatomic) NSManagedObjectContext *managedObjectContext;
@property (readonly, strong, nonatomic) NSManagedObjectModel *managedObjectModel;
@property (readonly, strong, nonatomic) NSPersistentStoreCoordinator *persistentStoreCoordinator;
@property (strong, nonatomic) AGSGeotriggerManager *geotriggerManager;

- (void)saveContext;
- (NSURL *)applicationDocumentsDirectory;

@end
