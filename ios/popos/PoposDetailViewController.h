//
//  PoposDetailViewController.h
//  popos
//
//  Created by Brandon Liu on 4/20/13.
//  Copyright (c) 2013 Brandon Liu. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "Popo.h"

@interface PoposDetailViewController : UIViewController
@property (strong, nonatomic) Popo *popo;
@property (weak, nonatomic) IBOutlet UILabel *hoursLabel;
@property (weak, nonatomic) IBOutlet UITextView *descriptionLabel;
@property (weak, nonatomic) IBOutlet UIImageView *imageView;
@end
