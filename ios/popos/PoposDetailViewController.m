//
//  PoposDetailViewController.m
//  popos
//
//  Created by Brandon Liu on 4/20/13.
//  Copyright (c) 2013 Brandon Liu. All rights reserved.
//

#import "PoposDetailViewController.h"

@interface PoposDetailViewController ()

@end

@implementation PoposDetailViewController

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        // Custom initialization
    }
    return self;
}

- (void)viewDidLoad
{
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
    
    NSURL * url = [NSURL URLWithString:self.popo.imageUrl];
    NSURLRequest * request = [NSURLRequest requestWithURL:url];
    [NSURLConnection sendAsynchronousRequest:request
                                       queue:[NSOperationQueue currentQueue]
                           completionHandler:^(NSURLResponse * resp, NSData * data, NSError * error) {
                               
                               // No error handling - check `error` if you want to
                               UIImage * img = [UIImage imageWithData:data];
                               [self.imageView performSelectorOnMainThread:@selector(setImage:) withObject:img waitUntilDone:YES];
                           }];
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (void) viewWillAppear:(BOOL)animated {
    self.hoursLabel.text = self.popo.hours;
    self.descriptionLabel.text = self.popo.description;
}
//- (void)setPopo:(Popo *)popo {
//    self.hoursLabel.text = popo.hours;
//    self.descriptionLabel.text = popo.description;
//    _popo = popo;
//}

@end
