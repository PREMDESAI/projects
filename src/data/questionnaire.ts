export interface IRange {
    min: number;
    max: number;
}

export interface IOption {
    title: string;
    range: IRange | string;
    default?: boolean;
}

export interface IHint {
    title: string;
    description: string;
}

export interface IQuestion {
    questionNumber: number;
    hint: IHint;
    title: string;
    pseudoTitle: string;
    options: IOption[];
}

export interface ISection {
    title: string;
    questions: IQuestion[];
}

export interface ITab {
    title: string;
    sections: ISection[];
}

export interface IQuestionnaire {
    currency: string;
    title: string;
    estimatorTitle: string;
    tabs: ITab[];
}

export const questionnaire: IQuestionnaire = {
    currency: '$',
    title: 'Video Production Cost Calculator',
    estimatorTitle: 'Video Production Cost Range',
    tabs: [{
        title: 'Low-Cost',
        sections: [{
            title: 'Pre-Production',
            questions: [{
                questionNumber: 1,
                hint: {
                    title: 'Do you have a concept and storyboard in place?',
                    description: `Pre-production is the most imporant phase of video production. If you don't have the right concept, script and storyboard in place it doesn't matter how well you film and edit your project. 'Creative' is never the goal. 'Creative' is a tool you use to engage your audience and ultimately achieve your objective. You start the production process by developing an idea or concept that helps you achieve your objective. You then build a script and you build a storyboard to explain what happens throughout the video. What are the important elements, situations, actions, text, animations, conversations, special effects, etc. that happen during the video? All of this should be outlined in detail in the storyboard. The storyboard is where you validate your idea, your script and everything you plan on showing in the video with your customer before you start production.`
                },
                title: 'Do you require a concept, script and storyboard?',
                pseudoTitle: 'Concept or Storyboard',
                options: [{
                    default: true,
                    title: 'We will supply the concept and script',
                    range: {
                        max: 0,
                        min: 0,
                    }
                }, {
                    title: 'We need a concept only',
                    range: {
                        max: 500,
                        min: 100,
                    }
                }, {
                    title: 'We need a concept and script',
                    range: {
                        max: 700,
                        min: 200,
                    }
                }, {
                    title: 'We need a concept and storyboard',
                    range: {
                        max: 1000,
                        min: 300,
                    }
                }]
            }, {
                questionNumber: 2,
                hint: {
                    title: 'How large is the production / project management team on this project?',
                    description: 'Some productions are small and may only require one or two people. Others require large teams with specialized skills to carry out specialized tasks. Video projects have a lot of moving parts and someone needs to coordinate all of the required activities. It must be clear from the start who ownes this process. Setting up planning meetings, project management, acquiring permits and permissions, scheduling crew, coordinating on-camera personnel, scheduling and managing milestones, etc. - all of these tasks require coordination and someone has to be identified as the owner of all of these activities.'
                },
                title: 'Who will handle the project scheduling and the admin?',
                pseudoTitle: 'Project Management',
                options: [{
                    default: true,
                    title: 'We will handle all scheduling and admin',
                    range: {
                        max: 0,
                        min: 0,
                    }
                }, {
                    title: 'We will share admin and scheduling with production company',
                    range: {
                        max: 350,
                        min: 150,
                    }
                }, {
                    title: 'Production company to perform basic scheduling tasks',
                    range: {
                        max: 400,
                        min: 200,
                    }
                }, {
                    title: 'Production company to perform all scheduling and admin',
                    range: {
                        max: 500,
                        min: 300,
                    }
                }]
            }]
        }, {
            title: 'Production',
            questions: [{
                questionNumber: 3,
                hint: {
                    title: 'What type of film crew do you need for your shoot?',
                    description: 'How many people do you need to shoot your video? What camera, lighting and audio equipment will they require? What skills and what support crew are needed to do the job right? There are two critical elements that determine the success of any shoot: The expertise of the entire crew and time. A top notch crew will perfrom miracles if they have enough time to do their jobs properly. On smaller productions time is always a factor - budgets are low and the client is often not willing to pay for the time it takes to do the job well. On larger projects budgets are often greater and their is more lattitude to bring in the best people for the job and allow them the time to do the job properly.'
                },
                title: 'What type of film crew do you need for your shoot?',
                pseudoTitle: 'Film Crew',
                options: [{
                    title: `We don't need a camera for this video project`,
                    range: {
                        max: 0,
                        min: 0,
                    },
                }, {
                    title: 'One camera operator with camera, lights and audio',
                    range: {
                        max: 800,
                        min: 300,
                    },
                    default: true
                }, {
                    title: 'One camera operator with two cameras lights and audio',
                    range: {
                        max: 1000,
                        min: 400,
                    },
                }, {
                    title: 'Two camera operators with two cameras lights and audio',
                    range: {
                        max: 1200,
                        min: 500,
                    },
                }]
            }, {
                questionNumber: 4,
                hint: {
                    title: 'How many days of shooting are required?',
                    description: `How many scenes / set-ups, how many different locations are you shooting at and what's involved with each scene. Shooting days are always a negotiation as production teams want more time and the client wants the project completed done in less time.`
                },
                title: 'How many days of shooting are required?',
                pseudoTitle: 'Shooting Days',
                options: [{
                    title: 'Half day of shooting',
                    range: 'Half day',
                }, {
                    title: 'Full day of shooting',
                    range: '1 day',
                    default: true,
                }, {
                    title: 'Two days of shooting',
                    range: '2 days',
                }, {
                    title: 'Three days of shooting',
                    range: '3 days',
                }]
            }, {
                questionNumber: 5,
                hint: {
                    title: 'Do you need a studio or other controlled  shooting space that you cannot provide?',
                    description: 'Where are you shooting? Do you need a  sound studio or a closed-set? Are you shooting against a green or white screen? Are you shooting on-location somewhere? What location suits the script?'
                },
                title: 'Do you need a studio or other controlled shooting space that you cannot provide?',
                pseudoTitle: 'Studio Space',
                options: [{
                    default: true,
                    title: 'We will shoot at our location',
                    range: {
                        max: 0,
                        min: 0,
                    }
                }, {
                    title: 'We will find a shooting location for free',
                    range: {
                        max: 0,
                        min: 0,
                    }
                }, {
                    title: 'We require a studio or controlled space to shoot',
                    range: {
                        max: 1000,
                        min: 200,
                    }
                }]
            }, {
                questionNumber: 6,
                hint: {
                    title: 'Do you require a teleprompter and operator?',
                    description: `A teleprompter can save a shoot. Even the most experienced speaker can be intimidated by lights and camera. It's true that you can often tell when someone is reading from a teleprompter but that may still be preferable to the agony of a shoot spiraling out of control because the CEO can't remember his lines.`
                },
                title: 'Do you require a teleprompter and operator?',
                pseudoTitle: 'Telepompter',
                options: [{
                    title: `No, we don't need a teleprompter`,
                    range: {
                        max: 0,
                        min: 0,
                    },
                    default: true,
                }, {
                    title: 'We need a teleprompter and operator for half day',
                    range: {
                        min: 150,
                        max: 350,
                    }
                }, {
                    title: 'We need a teleprompter and operator for full day',
                    range: {
                        min: 250,
                        max: 500,
                    }
                }, {
                    title: 'We need a teleprompter and operator for two days',
                    range: {
                        min: 400,
                        max: 800,
                    }
                }]
            }, {
                questionNumber: 7,
                hint: {
                    title: 'Do you require on-camera talent?',
                    description: 'Do you need to hire professional presenters, actors or models to improve the quality of your presentation? Not everyone is good on camera. You may need to make difficult decisions about who should represent your company. In a broadcast commercial quite often it is not someone in your company. Even in a corporate video you may decide that hiring outside talent is the best choice.'
                },
                title: 'Do you require on-camera talent?',
                pseudoTitle: 'Talent',
                options: [{
                    title: `We don't require on-camera talent`,
                    range: {
                        min: 0,
                        max: 0,
                    },
                    default: true,
                }, {
                    title: 'We will supply all on-camera talent',
                    range: {
                        min: 0,
                        max: 0,
                    }
                }, {
                    title: 'We need a low-cost presenter',
                    range: {
                        min: 50,
                        max: 250,
                    }
                }, {
                    title: 'We need a professional Presenter',
                    range: {
                        min: 250,
                        max: 1000,
                    }
                }, {
                    title: 'We need an actor',
                    range: {
                        min: 500,
                        max: 1500,
                    }
                }]
            }, {
                questionNumber: 8,
                hint: {
                    title: 'How many days of shooting are needed for talent?',
                    description: 'Your talent may or may not be needed for shooting day. A well managed shoot can save everyone time and money.'
                },
                title: 'How many days of shooting are needed for talent?',
                pseudoTitle: 'Talent Shooting Days',
                options: [{
                    title: 'Half day of shooting',
                    range: 'Half day'
                }, {
                    title: 'Full day of shooting',
                    range: '1 day',
                    default: true,
                }, {
                    title: 'Two days of shooting',
                    range: '2 days',
                }, {
                    title: 'Three days of shooting',
                    range: '3 days',
                }]
            }]
        }, {
            title: 'Post-Production',
            questions: [{
                questionNumber: 9,
                hint: {
                    title: 'How many days of editing are required?',
                    description: 'Editing time is the most difficult thing to estimate in a video project. The ratio of shooting time to editing time can be one-to-one or it can be one-to-twenty or more depending on how the video was shot, how much footage was shot, what type of colour grading is required, how long the finished piece is, how many possible client changes might be needed and a host of other variables.'
                },
                title: 'How many days of editing are required?',
                pseudoTitle: 'Editing',
                options: [{
                    title: 'No editing needed, we will take care of all post-production',
                    range: {
                        min: 0,
                        max: 0,
                    }
                }, {
                    title: 'One day of editing',
                    range: {
                        min: 200,
                        max: 750,
                    },
                    default: true,
                }, {
                    title: 'Two days of editing',
                    range: {
                        min: 400,
                        max: 1500,
                    }
                }, {
                    title: 'Three days of editing',
                    range: {
                        min: 600,
                        max: 2250,
                    }
                }, {
                    title: 'Four days of editing',
                    range: {
                        min: 800,
                        max: 3000,
                    }
                }]
            }, {
                questionNumber: 10,
                hint: {
                    title: 'Are special animation or special effects required?',
                    description: 'Some video productions are 100% animation and some require no special effects or animation. High quality animation and effects can be very expensieve to produce.'
                },
                title: 'Is there special animation or graphics required?',
                pseudoTitle: 'Animation / Graphics',
                options: [{
                    title: 'No animation is required beyond simple graphics and text',
                    range: {
                        min: 0,
                        max: 0,
                    },
                    default: true,
                }, {
                    title: 'A half day of graphic creation / animation',
                    range: {
                        min: 100,
                        max: 400,
                    },
                }, {
                    title: 'One day of graphic creation / animation',
                    range: {
                        min: 200,
                        max: 600,
                    },
                }, {
                    title: 'Two days of graphic creation / animation',
                    range: {
                        min: 400,
                        max: 1200,
                    },
                }, {
                    title: 'Three days of graphic creation / animation',
                    range: {
                        min: 600,
                        max: 1800,
                    },
                }]
            }, {
                questionNumber: 11,
                hint: {
                    title: 'Is music required for your project?',
                    description: `Music is the single most underestimated and under-rated element of any video production. Music set's the tone, the pace and the mood for the entire video. Music tells you how to feel about the video.  Music is very improtant.`
                },
                title: 'Is music required for your project?',
                pseudoTitle: 'Music',
                options: [{
                    title: 'No music is required for this project',
                    range: {
                        min: 0,
                        max: 0,
                    }
                }, {
                    title: 'A generic music track is needed',
                    range: {
                        min: 25,
                        max: 100,
                    },
                    default: true,
                }, {
                    title: 'A specific type of music is needed for this project',
                    range: {
                        min: 100,
                        max: 300,
                    }
                }]
            }, {
                questionNumber: 12,
                hint: {
                    title: 'Is voice-over required for this project?',
                    description: 'Professional voice-over can add a great deal of substance and professionalism to your video.'
                },
                title: 'Is voice-over required for this project?',
                pseudoTitle: 'Voice-Over',
                options: [{
                    title: 'No voice-over is need for this project',
                    range: {
                        min: 0,
                        max: 0,
                    },
                    default: true,
                }, {
                    title: 'We will supply the audio for the project',
                    range: {
                        min: 0,
                        max: 0,
                    },
                }, {
                    title: 'No voice-over is need for this project',
                    range: {
                        min: 100,
                        max: 200,
                    },
                }, {
                    title: 'Professional Voice-over talent is required',
                    range: {
                        min: 250,
                        max: 500,
                    },
                }]
            }, {
                questionNumber: 13,
                hint: {
                    title: 'Stock footage,  photos, illustrations and graphics.',
                    description: 'Do you need specialized media to supplement your video? Stock photos, stock video, specialized illustrations or graphics may be required to complete the video.'
                },
                title: 'Do you need stock footage or photos?',
                pseudoTitle: 'Stock photos and images',
                options: [{
                    title: 'No stock footage or photos are required',
                    range: {
                        min: 0,
                        max: 0,
                    },
                    default: true,
                }, {
                    title: 'Basic photos or stock footage is needed',
                    range: {
                        min: 50,
                        max: 200,
                    }
                }, {
                    title: 'Premium phtotos or stock footage is needed',
                    range: {
                        min: 100,
                        max: 400,
                    }
                }]
            }]
        }]
    }, {
        title: 'Mid-Range',
        sections: [{
            title: 'Pre-Production',
            questions: [{
                questionNumber: 1,
                hint: {
                    title: 'Do you have a concept and storyboard in place?',
                    description: `Pre-production is the most imporant phase of video production. If you don't have the right concept, script and storyboard in place it doesn't matter how well you film and edit your project. 'Creative' is never the goal. 'Creative' is a tool you use to engage your audience and ultimately achieve your objective. You start the production process by developing an idea or concept that helps you achieve your objective. You then build a script and you build a storyboard to explain what happens throughout the video. What are the important elements, situations, actions, text, animations, conversations, special effects, etc. that happen during the video? All of this should be outlined in detail in the storyboard. The storyboard is where you validate your idea, your script and everything you plan on showing in the video with your customer before you start production.`
                },
                title: 'Do you have a concept and storyboard in place?',
                pseudoTitle: 'Concept and Storyboard',
                options: [{
                    title: `We're supplying the concept and the storyboard`,
                    range: {
                        min: 0,
                        max: 0,
                    },
                }, {
                    title: 'We have a concpet and need to develop a storyboard',
                    range: {
                        min: 450,
                        max: 2500,
                    },
                }, {
                    title: 'We need a concept developed and a storyboard',
                    range: {
                        min: 1000,
                        max: 5000,
                    },
                    default: true,
                }],
            }, {
                questionNumber: 2,
                hint: {
                    title: 'How large is the production / project management team on this project?',
                    description: 'Some productions are small and may only require one or two people. Others require large teams with specialized skills to carry out specialized tasks. Video projects have a lot of moving parts and someone needs to coordinate all of the required activities. It must be clear from the start who ownes this process. Setting up planning meetings, project management, acquiring permits and permissions, scheduling crew, coordinating on-camera personnel, scheduling and managing milestones, etc. - all of these tasks require coordination and someone has to be identified as the owner of all of these activities.'
                },
                title: 'How much project management and scheduling is required?',
                pseudoTitle: 'Project Management',
                options: [{
                    title: 'A small amount of project management is required',
                    range: {
                        min: 250,
                        max: 750,
                    }
                }, {
                    title: 'A modest amount of project management is needed',
                    range: {
                        min: 500,
                        max: 1500,
                    },
                    default: true,
                }, {
                    title: 'A great deal of project management is required',
                    range: {
                        min: 1000,
                        max: 3000,
                    }
                }],
            }]
        }, {
            title: 'Production',
            questions: [{
                questionNumber: 3,
                hint: {
                    title: 'What type of film crew do you need for your shoot?',
                    description: 'How many people do you need to shoot your video? What camera, lighting and audio equipment will they require? What skills and what support crew are needed to do the job right? There are two critical elements that determine the success of any shoot: The expertise of the entire crew and time. A top notch crew will perfrom miracles if they have enough time to do their jobs properly. On smaller productions time is always a factor - budgets are low and the client is often not willing to pay for the time it takes to do the job well. On larger projects budgets are often greater and their is more lattitude to bring in the best people for the job and allow them the time to do the job properly.'
                },
                title: 'What type of film crew do you need for your shoot?',
                pseudoTitle: 'Film Crew',
                options: [{
                    title: `We don't need a camera crew for this video project`,
                    range: {
                        min: 0,
                        max: 0,
                    }
                }, {
                    title: 'Two man crew - two cameras or camera and audio',
                    range: {
                        min: 2400,
                        max: 8000,
                    }
                }, {
                    title: 'Three man crew - two cameras and one audio',
                    range: {
                        min: 3600,
                        max: 10000,
                    },
                    default: true
                }, {
                    title: 'Four man crew - two cameras, one audio and director',
                    range: {
                        min: 5600,
                        max: 16000,
                    }
                }, {
                    title: 'Five man + crew - two cameras, audio, director and gaffer',
                    range: {
                        min: 6400,
                        max: 20000,
                    }
                }],
            }, {
                questionNumber: 4,
                hint: {
                    title: 'How many days of shooting are required?',
                    description: `How many scenes / set-ups, how many different locations are you shooting at and what's involved with each scene. Shooting days are always a negotiation as production teams want more time and the client wants the project completed done in less time.`
                },
                title: 'How many days of shooting are required?',
                pseudoTitle: 'Days of Shooting',
                options: [{
                    title: 'Half day of shooting',
                    range: 'Half day'
                }, {
                    title: 'Full day of shooting',
                    range: '1 day'
                }, {
                    title: 'Two days of shooting',
                    range: '2 days',
                    default: true
                }, {
                    title: 'Three days of shooting',
                    range: '3 days'
                }, {
                    title: 'Four days of shooting',
                    range: '4 days'
                }],
            }, {
                questionNumber: 5,
                hint: {
                    title: 'Do you require special production equipment?',
                    description: 'Your budget and the complexity of the shoot will determine what equipment is required for your video. Do you need a jib, a track-dolly, a crane, specialized lighting, or any other type of specialized gear to get the shots you require. Most of thes tools also require special handling.'
                },
                title: 'Do you require special production equipment?',
                pseudoTitle: 'Special Production Equipment',
                options: [{
                    title: 'No special equipment is needed',
                    range: {
                        min: 0,
                        max: 0,
                    }
                }, {
                    title: 'Some special equipment will be needed',
                    range: {
                        min: 500,
                        max: 2000,
                    },
                    default: true
                }, {
                    title: 'A lot of specialized gear is required',
                    range: {
                        min: 1000,
                        max: 5000,
                    }
                }],
            }, {
                questionNumber: 6,
                hint: {
                    title: 'Do you need a studio or other controlled  shooting space that you cannot provide?',
                    description: 'Where are you shooting? Do you need a  sound studio or a closed-set? Are you shooting against a green or white screen? Are you shooting on-location somewhere? What location suits the script?'
                },
                title: 'Do you need a studio or other controlled shooting space that you cannot provide?',
                pseudoTitle: 'Studio',
                options: [{
                    title: 'We will provide the shooting location',
                    range: {
                        min: 0,
                        max: 0,
                    }
                }, {
                    title: 'We need a studio location to shoot in',
                    range: {
                        min: 700,
                        max: 3000,
                    },
                    default: true
                }, {
                    title: 'We will require on-location shooting for this video',
                    range: {
                        min: 500,
                        max: 5000,
                    }
                }],
            }, {
                questionNumber: 7,
                hint: {
                    title: 'Do you require a teleprompter and operator?',
                    description: `A teleprompter can save a shoot. Even the most experienced speaker can be intimidated by lights and camera. It's true that you can often tell when someone is reading from a teleprompter but that may still be preferable to the agony of a shoot spiraling out of control because the CEO can't remember his lines.`
                },
                title: 'Do you require a teleprompter and operator?',
                pseudoTitle: 'Teleprompter',
                options: [{
                    title: `No, we don't need a teleprompter`,
                    range: {
                        min: 0,
                        max: 0,
                    },
                    default: true
                }, {
                    title: 'We need a teleprompter and operator for half day',
                    range: {
                        min: 300,
                        max: 600,
                    }
                }, {
                    title: 'We need a teleprompter and operator for full day',
                    range: {
                        min: 800,
                        max: 1800,
                    }
                }, {
                    title: 'We need a teleprompter and operator for two days',
                    range: {
                        min: 800,
                        max: 1800,
                    }
                }, {
                    title: 'We need a teleprompter and operator for three days',
                    range: {
                        min: 1200,
                        max: 2700,
                    }
                }],
            }, {
                questionNumber: 8,
                hint: {
                    title: 'Do you require on-camera talent?',
                    description: 'Do you need to hire professional presenters, actors or models to improve the quality of your presentation? Not everyone is good on camera. You may need to make difficult decisions about who should represent your company. In a broadcast commercial quite often it is not someone in your company. Even in a corporate video you may decide that hiring outside talent is the best choice.'
                },
                title: 'Do you require on-camera talent?',
                pseudoTitle: 'Talent',
                options: [{
                    title: 'We will supply any on-camera talent (if needed)',
                    range: {
                        min: 0,
                        max: 0,
                    },
                    default: true,
                }, {
                    title: 'We need a professional Presenter',
                    range: {
                        min: 0,
                        max: 0,
                    }
                }, {
                    title: 'We need a non-union actor',
                    range: {
                        min: 0,
                        max: 0,
                    }
                }, {
                    title: 'We need a union actor',
                    range: {
                        min: 0,
                        max: 0,
                    }
                }, {
                    title: 'We need a Celebrity',
                    range: {
                        min: 0,
                        max: 0,
                    }
                }],
            }, {
                questionNumber: 9,
                hint: {
                    title: 'How many days of shooting are needed for talent?',
                    description: 'Your talent may or may not be needed for shooting day. A well managed shoot can save everyone time and money.'
                },
                title: 'How many days of shooting is needed for talent?',
                pseudoTitle: 'Talent Shooting Days',
                options: [{
                    title: 'No shooting days are required',
                    range: 'No shooting',
                    default: true
                }, {
                    title: 'Half day of shooting',
                    range: 'Half day'
                }, {
                    title: 'Full day of shooting',
                    range: '1 day'
                }, {
                    title: 'Two days of shooting',
                    range: '2 days'
                }, {
                    title: 'Three days of shooting',
                    range: '3 days'
                }],
            }, {
                questionNumber: 10,
                hint: {
                    title: 'Do you require hair, make-up or wardrobe for talent',
                    description: `On lower cost projects a brush and a container of neutral blush (to remove an oily or sweaty appearance on the subject's face) can go a long way. If you have both the budget and the need then it is a good idea to hire a Hair and Makeup expert to help ensure your subjects look great on camera. It's also a good idea to have them watch the shoot to ensure continuity. On higher-end productions wardrobe is included to ensure the proper look.`
                },
                title: 'Do you require hair, make-up or wardrobe for talent?',
                pseudoTitle: 'Hair & Make-up',
                options: [{
                    title: 'No hair, make-up or wardrobe required',
                    range: {
                        min: 0,
                        max: 0
                    }
                }, {
                    title: 'We require basic hair and makeup',
                    range: {
                        min: 400,
                        max: 1000
                    },
                    default: true
                }, {
                    title: 'We require professional hair and makeup',
                    range: {
                        min: 800,
                        max: 2500
                    }
                }, {
                    title: 'We require full hair, makeup and wardrobe',
                    range: {
                        min: 1000,
                        max: 4000
                    }
                }],
            }, {
                questionNumber: 11,
                hint: {
                    title: 'Location costs and permissions.',
                    description: 'Depending on what you are shooting you may want to pay for the use of a specific location. While this option may seem like an extravagance, it could make the difference between a dull video and an engaging video. A talking head (all things being equal) is more interesting to watch if shot against an interesting backdrop. Contact your local film office - they should have a list of possible locations to shoot in your area for a fee. Costs range considerably - you can pay your local coffee shop a couple bucks to shoot during a quiet time or you can get access to a local museum for thousands of dollars... or you can pay to close down your town at rush-hour if your budget allows.'
                },
                title: 'Location and Permission costs',
                pseudoTitle: 'Location costs',
                options: [{
                    title: 'No special costs associated with lcoation',
                    range: {
                        min: 0,
                        max: 0
                    }
                }, {
                    title: 'Basic Location Costs',
                    range: {
                        min: 500,
                        max: 2000
                    },
                    default: true
                }, {
                    title: 'Advanced Location and Permissions needed',
                    range: {
                        min: 2000,
                        max: 5000
                    }
                }],
            }]
        }, {
            title: 'Post_Production',
            questions: [{
                questionNumber: 12,
                hint: {
                    title: 'How many days of editing are required?',
                    description: 'Editing time is the most difficult thing to estimate in a video project. The ratio of shooting time to editing time can be one-to-one or it can be one-to-twenty or more depending on how the video was shot, how much footage was shot, what type of colour grading is required, how long the finished piece is, how many possible client changes might be needed and a host of other variables.'
                },
                title: 'How many days of editing are required?',
                pseudoTitle: 'Editing',
                options: [{
                    title: 'No editing, a filming-only project',
                    range: {
                        min: 0,
                        max: 0
                    }
                }, {
                    title: 'One to two days of editing',
                    range: {
                        min: 800,
                        max: 3200
                    },
                    default: true
                }, {
                    title: 'Three to five days of editing',
                    range: {
                        min: 2400,
                        max: 8000
                    }
                }, {
                    title: 'Five to nine days of editing',
                    range: {
                        min: 4000,
                        max: 14000
                    }
                }, {
                    title: 'Ten days of editing',
                    range: {
                        min: 8000,
                        max: 20000
                    }
                }],
            }, {
                questionNumber: 13,
                hint: {
                    title: 'Are special animation or special effects required?',
                    description: 'Some video productions are 100% animation and some require no special effects or animation. High quality animation and effects can be very expensieve to produce.'
                },
                title: ' Is there special animation or special effects required?',
                pseudoTitle: 'Animation & Special Effects',
                options: [{
                    title: 'No animation / fx are required beyond simple graphics and text',
                    range: {
                        min: 0,
                        max: 0
                    },
                    default: true
                }, {
                    title: 'One to two days of animation / fx',
                    range: {
                        min: 800,
                        max: 3200
                    }
                }, {
                    title: 'Three to five days of animation / fx',
                    range: {
                        min: 2400,
                        max: 8000
                    }
                }, {
                    title: 'Five to nine days of animation / fx',
                    range: {
                        min: 4000,
                        max: 14000
                    }
                }, {
                    title: 'Ten days or more of animation / fx',
                    range: {
                        min: 8000,
                        max: 20000
                    }
                }],
            }, {
                questionNumber: 14,
                hint: {
                    title: 'Is music required for your project?',
                    description: `Music is the single most underestimated and under-rated element of any video production. Music set's the tone, the pace and the mood for the entire video. Music tells you how to feel about the video.  Music is very improtant.`
                },
                title: 'Is music required for your project?',
                pseudoTitle: 'Music',
                options: [{
                    title: 'No music is required for this project',
                    range: {
                        min: 0,
                        max: 0
                    }
                }, {
                    title: 'A sound track is required',
                    range: {
                        min: 200,
                        max: 800
                    },
                    default: true
                }, {
                    title: 'Specialized production music is required',
                    range: {
                        min: 500,
                        max: 1500
                    }
                }, {
                    title: 'Custom music is required',
                    range: {
                        min: 2000,
                        max: 10000
                    }
                }],
            }, {
                questionNumber: 15,
                hint: {
                    title: 'Is voice-over required for this project?',
                    description: 'Professional voice-over can add a great deal of substance and professionalism to your video.'
                },
                title: 'Is voice-over required for this project?',
                pseudoTitle: 'Voice-Over',
                options: [{
                    title: 'No voice-over is need for this project',
                    range: {
                        min: 0,
                        max: 0
                    },
                    default: true
                }, {
                    title: 'We will supply the audio for voice-over',
                    range: {
                        min: 0,
                        max: 0
                    }
                }, {
                    title: 'We will supply the voice-over talent',
                    range: {
                        min: 200,
                        max: 800
                    }
                }, {
                    title: 'Professional voice-over talent is required',
                    range: {
                        min: 400,
                        max: 1000
                    }
                }, {
                    title: 'Celebrity Voice-over talent is required',
                    range: {
                        min: 1000,
                        max: 10000
                    }
                }],
            }, {
                questionNumber: 16,
                hint: {
                    title: 'Is specialized audio work required?',
                    description: 'Beyond recorded voice (either live or voice-over) do you need foley work or other types of specialized music, audio effects or over-dubs?'
                },
                title: 'Is specialized audio work required?',
                pseudoTitle: 'Audio and Foley',
                options: [{
                    title: 'No specialized audio work is needed',
                    range: {
                        min: 0,
                        max: 0
                    }
                }, {
                    title: 'Some audio work is required',
                    range: {
                        min: 500,
                        max: 1500
                    },
                    default: true
                }, {
                    title: 'A moderate amount of audio work is required',
                    range: {
                        min: 1000,
                        max: 25000
                    }
                }, {
                    title: 'A great deal of audio work is required',
                    range: {
                        min: 2000,
                        max: 5000
                    }
                }],
            }, {
                questionNumber: 17,
                hint: {
                    title: 'Stock footage,  photos, illustrations and graphics.',
                    description: 'Do you need specialized media to supplement your video. Stock photos, stock video, specialized illustrations or graphics may be required to complete the video.'
                },
                title: 'Stock footage, photos, illustrations and graphics?',
                pseudoTitle: 'Stock Images and Footage',
                options: [{
                    title: 'No stock footage or photos are required',
                    range: {
                        min: 0,
                        max: 0
                    }
                }, {
                    title: 'Basic photos and /or stock footage is needed',
                    range: {
                        min: 200,
                        max: 1000
                    },
                    default: true
                }, {
                    title: 'Premium phtotos or stock footage is needed',
                    range: {
                        min: 500,
                        max: 5000
                    }
                }],
            }]
        }]
    }, {
        title: 'High-End',
        sections: [{
            title: 'Pre-Production',
            questions: [{
                questionNumber: 1,
                hint: {
                    title: 'Do you have a concept and storyboard in place?',
                    description: `Pre-production is the most imporant phase of video production. If you don't have the right concept, script and storyboard in place it doesn't matter how well you film and edit your project. 'Creative' is never the goal. 'Creative' is a tool you use to engage your audience and ultimately achieve your objective. You start the production process by developing an idea or concept that helps you achieve your objective. You then build a script and you build a storyboard to explain what happens throughout the video. What are the important elements, situations, actions, text, animations, conversations, special effects, etc. that happen during the video? All of this should be outlined in detail in the storyboard. The storyboard is where you validate your idea, your script and everything you plan on showing in the video with your customer before you start production.`
                },
                title: 'Do you have a concept and storyboard in place?',
                pseudoTitle: 'Concept and Storyboard',
                options: [{
                    title: 'We have a concpet but need a storyboard developed',
                    range: {
                        min: 2500,
                        max: 5000
                    }
                }, {
                    title: 'We need both a concept and a storyboard',
                    range: {
                        min: 5000,
                        max: 20000
                    },
                    default: true
                }]
            }, {
                questionNumber: 2,
                hint: {
                    title: 'How large is the production / project management team on this project?',
                    description: 'Some productions are small and may only require one or two people. Others require large teams with specialized skills to carry out specialized tasks. Video projects have a lot of moving parts and someone needs to coordinate all of the required activities. It must be clear from the start who ownes this process. Setting up planning meetings, project management, acquiring permits and permissions, scheduling crew, coordinating on-camera personnel, scheduling and managing milestones, etc. - all of these tasks require coordination and someone has to be identified as the owner of all of these activities.'
                },
                title: 'How large is the production / project management team on this project?',
                pseudoTitle: 'Project Management',
                options: [{
                    title: 'A modest amount of project management is required',
                    range: {
                        min: 1000,
                        max: 5000
                    }
                }, {
                    title: 'An average amount of project management is needed',
                    range: {
                        min: 5000,
                        max: 10000
                    },
                    default: true
                }, {
                    title: 'A great deal of project management is required',
                    range: {
                        min: 10000,
                        max: 30000
                    }
                }]
            }]
        }, {
            title: 'Production',
            questions: [{
                questionNumber: 3,
                hint: {
                    title: 'What type of film crew do you need for your shoot?',
                    description: 'How many people do you need to shoot your video? What camera, lighting and audio equipment will they require? What skills and what support crew are needed to do the job right? There are two critical elements that determine the success of any shoot: The expertise of the entire crew and time. A top notch crew will perfrom miracles if they have enough time to do their jobs properly. On smaller productions time is always a factor - budgets are low and the client is often not willing to pay for the time it takes to do the job well. On larger projects budgets are often greater and their is more lattitude to bring in the best people for the job and allow them the time to do the job properly.'
                },
                title: 'What type of film crew do you need for your shoot?',
                pseudoTitle: 'Film Crew',
                options: [{
                    title: 'Small Crew - 2 to 4 people',
                    range: {
                        min: 6000,
                        max: 20000
                    }
                }, {
                    title: 'Medium Crew - 4 - 6 people',
                    range: {
                        min: 12000,
                        max: 30000
                    },
                    default: true
                }, {
                    title: 'Large Crew - 7+ people',
                    range: {
                        min: 17000,
                        max: 50000
                    }
                }]
            }, {
                questionNumber: 4,
                hint: {
                    title: 'What level of video direction is required for the shoot?',
                    description: 'Who is guiding the vision of the video? Who is in charge of getting the right shots that help tell the story that is your storyboard. Is it your cameraman, your client, a marketing person or a video director. Your budget will determine who plays this role but someone has to be responsible. If you have the budget an experienced director is the best investement you can make after you have created your storyboard.'
                },
                title: 'What level of video direction is required for the shoot?',
                pseudoTitle: 'Direction',
                options: [{
                    title: 'We need a director for the shoot',
                    range: {
                        min: 1500,
                        max: 20000
                    }
                }, {
                    title: 'We need a director and first assistant director',
                    range: {
                        min: 3500,
                        max: 24000
                    },
                    default: true
                }, {
                    title: 'We need a director, first assistant and 2nd unit director',
                    range: {
                        min: 3500,
                        max: 27000
                    }
                }]
            }, {
                questionNumber: 5,
                hint: {
                    title: 'How many days of shooting are required?',
                    description: `How many scenes / set-ups, how many different locations are you shooting at and what's involved with each scene. Shooting days are always a negotiation as production teams want more time and the client wants the project completed done in less time.`
                },
                title: 'How many days of shooting are required?',
                pseudoTitle: 'Shooting Days',
                options: [{
                    title: 'Full day of shooting',
                    range: '1 day'
                }, {
                    title: 'Two days of shooting',
                    range: '2 days',
                    default: true
                }, {
                    title: 'Three days of shooting',
                    range: '3 days'
                }, {
                    title: 'Four days of shooting',
                    range: '4 days'
                }, {
                    title: 'Five days of shooting',
                    range: '5 days'
                }]
            }, {
                questionNumber: 6,
                hint: {
                    title: 'Do you require special production equipment?',
                    description: 'Your budget and the complexity of the shoot will determine what equipment is required for your video. Do you need a jib, a track-dolly, a crane, specialized lighting, or any other type of specialized gear to get the shots you require. Most of thes tools also require special handling.'
                },
                title: 'Do you require special production equipment?',
                pseudoTitle: 'Special Equipment',
                options: [{
                    title: 'Some special equipment will be needed',
                    range: {
                        min: 1000,
                        max: 5000
                    },
                    default: true
                }, {
                    title: 'A moderate amount of specialized gear is needed',
                    range: {
                        min: 2500,
                        max: 10000
                    }
                }, {
                    title: 'A lot of specialized gear is required',
                    range: {
                        min: 4000,
                        max: 20000
                    }
                }]
            }, {
                questionNumber: 7,
                hint: {
                    title: 'Do you need a studio or other controlled  shooting space that you cannot provide?',
                    description: 'Where are you shooting? Do you need a  sound studio or a closed-set? Are you shooting against a green or white screen? Are you shooting on-location somewhere? What location suits the script?'
                },
                title: 'Do you need a studio or other controlled shooting space that you cannot provide?',
                pseudoTitle: 'Studio Space',
                options: [{
                    title: 'We will provide the shooting location',
                    range: {
                        min: 0,
                        max: 0
                    },
                    default: true
                }, {
                    title: 'We need a studio location to shoot in',
                    range: {
                        min: 2000,
                        max: 10000
                    }
                }, {
                    title: 'We will require on-location shooting for this video',
                    range: {
                        min: 3000,
                        max: 20000
                    }
                }]
            }, {
                questionNumber: 8,
                hint: {
                    title: 'Do you require a teleprompter and operator?',
                    description: `A teleprompter can save a shoot. Even the most experienced speaker can be intimidated by lights and camera. It's true that you can often tell when someone is reading from a teleprompter but that may still be preferable to the agony of a shoot spiraling out of control because the CEO can't remember his lines.`
                },
                title: 'Do you require a teleprompter and operator?',
                pseudoTitle: 'Teleprompter',
                options: [{
                    title: `No, we don't need a teleprompter`,
                    range: {
                        min: 0,
                        max: 0
                    },
                    default: true
                }, {
                    title: 'We need a teleprompter and operator for half day',
                    range: {
                        min: 300,
                        max: 600
                    }
                }, {
                    title: 'We need a teleprompter and operator for full day',
                    range: {
                        min: 400,
                        max: 900
                    }
                }, {
                    title: 'We need a teleprompter and operator for two days',
                    range: {
                        min: 800,
                        max: 1800
                    }
                }, {
                    title: 'We need a teleprompter and operator for three days',
                    range: {
                        min: 1200,
                        max: 2700
                    }
                }]
            }, {
                questionNumber: 9,
                hint: {
                    title: 'Do you require on-camera talent?',
                    description: 'Do you need to hire professional presenters, actors or models to improve the quality of your presentation? Not everyone is good on camera. You may need to make difficult decisions about who should represent your company. In a broadcast commercial quite often it is not someone in your company. Even in a corporate video you may decide that hiring outside talent is the best choice.'
                },
                title: 'Do you require on-camera talent?',
                pseudoTitle: 'Talent',
                options: [{
                    title: 'We will supply any on-camera talent (if needed)',
                    range: {
                        min: 0,
                        max: 0
                    },
                    default: true
                }, {
                    title: 'We need a professional Presenter',
                    range: {
                        min: 500,
                        max: 1500
                    }
                }, {
                    title: 'We need a non-union actor',
                    range: {
                        min: 800,
                        max: 2000
                    }
                }, {
                    title: 'We need a union actor',
                    range: {
                        min: 1200,
                        max: 4000
                    }
                }, {
                    title: 'We need a Celebrity (Local or National)',
                    range: {
                        min: 2000,
                        max: 200000
                    }
                }]
            }, {
                questionNumber: 10,
                hint: {
                    title: 'Do you require on-camera talent?',
                    description: 'Do you need to hire professional presenters, actors or models to improve the quality of your presentation? Not everyone is good on camera. You may need to make difficult decisions about who should represent your company. In a broadcast commercial quite often it is not someone in your company. Even in a corporate video you may decide that hiring outside talent is the best choice.'
                },
                title: 'How many days of shooting is needed for talent?',
                pseudoTitle: 'Talent Shooting Days',
                options: [{
                    title: 'No shooting days are required',
                    range: 'No shooting'
                }, {
                    title: 'Half day of shooting',
                    range: 'Half day'
                }, {
                    title: 'Full day of shooting',
                    range: '1 day',
                    default: true
                }, {
                    title: 'Two days of shooting',
                    range: '2 days'
                }, {
                    title: 'Three days of shooting',
                    range: '3 days'
                }]
            }, {
                questionNumber: 11,
                hint: {
                    title: 'Do you require hair, make-up or wardrobe for talent?',
                    description: `On lower cost projects a brush and a container of neutral blush (to remove an oily or sweaty appearance on the subject's face) can go a long way. If you have both the budget and the need then it is a good idea to hire a Hair and Makeup expert to help ensure your subjects look great on camera. It's also a good idea to have them watch the shoot to ensure continuity. On higher-end productions wardrobe is included to ensure the proper look.`
                },
                title: 'Do you require hair, make-up or wardrobe for talent?',
                pseudoTitle: 'Hair & Make-up',
                options: [{
                    title: 'No hair, make-up or wardrobe required',
                    range: {
                        min: 0,
                        max: 0
                    }
                }, {
                    title: 'We require basic hair and makeup',
                    range: {
                        min: 800,
                        max: 1500
                    },
                    default: true
                }, {
                    title: 'We require full hair and makeup',
                    range: {
                        min: 1000,
                        max: 3000
                    }
                }, {
                    title: 'We require full hair, makeup and wardrobe',
                    range: {
                        min: 2000,
                        max: 7000
                    }
                }]
            }, {
                questionNumber: 12,
                hint: {
                    title: 'Location costs and permissions.',
                    description: 'Depending on what you are shooting you may want to pay for the use of a specific location. While this option may seem like an extravagance, it could make the difference between a dull video and an engaging video. A talking head (all things being equal) is more interesting to watch if shot against an interesting backdrop. Contact your local film office - they should have a list of possible locations to shoot in your area for a fee. Costs range considerably - you can pay your local coffee shop a couple bucks to shoot during a quiet time or you can get access to a local museum for thousands of dollars... or you can pay to close down your town at rush-hour if your budget allows.'
                },
                title: 'Location and Permission costs',
                pseudoTitle: 'Location costs',
                options: [{
                    title: 'No special costs associated with lcoation',
                    range: {
                        min: 0,
                        max: 0
                    }
                }, {
                    title: 'Basic Location Costs',
                    range: {
                        min: 1000,
                        max: 5000
                    },
                    default: true
                }, {
                    title: 'Advanced Location and Permissions needed',
                    range: {
                        min: 5000,
                        max: 20000
                    }
                }]
            }, {
                questionNumber: 13,
                hint: {
                    title: 'Do you require extras for the shoot?',
                    description: 'Depending on the mood and style of your video you may want to pay people to be in the background. A scene can look rather empty or unnatural without anyone in it.'
                },
                title: 'Do you require extras for the shoot?',
                pseudoTitle: 'Extras',
                options: [{
                    title: `No we don't need extras`,
                    range: {
                        min: 0,
                        max: 0
                    },
                    default: true
                }, {
                    title: 'We need a small number of extras',
                    range: {
                        min: 600,
                        max: 1500
                    }
                }, {
                    title: 'We require a lot of extras for this shoot',
                    range: {
                        min: 2000,
                        max: 10000
                    }
                }]
            }, {
                questionNumber: 14,
                hint: {
                    title: 'Do you require craft services for talent and crew?',
                    description: `If you are working on a union shoot there are specific rules set out as to how you feed your crew. Even if you're on a tight budget it's a good idea to keep your team well fueled.`
                },
                title: 'Do you require craft services for talent and crew?',
                pseudoTitle: 'Craft Services',
                options: [{
                    title: `No we don't need craft services`,
                    range: {
                        min: 0,
                        max: 0
                    }
                }, {
                    title: 'We require basic craft services for cast and crew',
                    range: {
                        min: 500,
                        max: 3000
                    },
                    default: true
                }, {
                    title: 'We require full craft services for cast and crew',
                    range: {
                        min: 2000,
                        max: 7000
                    }
                }]
            }, {
                questionNumber: 15,
                hint: {
                    title: 'Do you require props, gear or staging for the shoot?',
                    description: 'Aside from video production equipment are there other special props or pieces of equipment that need to be included as part of the costs? Do you need a special backdrop, rental furniture, a plane or helicopter for an aerial shot or specialized equipment for the shoot? These all have to be factored in to the cost of your production.'
                },
                title: 'Do you require props, gear or staging for the shoot?',
                pseudoTitle: 'Props and staging',
                options: [{
                    title: 'No props, gear or staging are required',
                    range: {
                        min: 0,
                        max: 0
                    }
                }, {
                    title: 'We require off-the-shelf props, gear and/or basic staging',
                    range: {
                        min: 1500,
                        max: 5000
                    },
                    default: true
                }, {
                    title: 'We require customized props, gear and/or basic staging',
                    range: {
                        min: 4000,
                        max: 20000
                    }
                }]
            }, {
                questionNumber: 16,
                hint: {
                    title: 'Do you require special transportation services for your shoot?',
                    description: 'The more people and the more gear you use the more likely you are to require special transportation. Moving people and kit efficiently between different shooting setups might make the difference between a decent shoot and a great shoot.'
                },
                title: 'Do you require special transportation services for your shoot?',
                pseudoTitle: 'Transportation',
                options: [{
                    title: 'No transportation services are required',
                    range: {
                        min: 0,
                        max: 0
                    },
                    default: true
                }, {
                    title: 'Modest transportation services are required',
                    range: {
                        min: 1000,
                        max: 5000
                    }
                }, {
                    title: 'We need significant transportation services for our shoot',
                    range: {
                        min: 3500,
                        max: 10000
                    }
                }]
            }]
        }, {
            title: 'Post-Production',
            questions: [{
                questionNumber: 17,
                hint: {
                    title: 'How many days of editing are required?',
                    description: 'Editing time is the most difficult thing to estimate in a video project. The ratio of shooting time to editing time can be one-to-one or it can be one-to-twenty or more depending on how the video was shot, how much footage was shot, what type of colour grading is required, how long the finished piece is, how many possible client changes might be needed and a host of other variables.'
                },
                title: 'How many days of editing are required?',
                pseudoTitle: 'Editing',
                options: [{
                    title: 'Two to four days of editing',
                    range: {
                        min: 2400,
                        max: 9600
                    }
                }, {
                    title: 'Four to Six days of editing',
                    range: {
                        min: 4800,
                        max: 14400
                    },
                    default: true
                }, {
                    title: 'Seven to ten days of editing',
                    range: {
                        min: 8400,
                        max: 24000
                    }
                }, {
                    title: 'Ten days + of editing',
                    range: {
                        min: 12000,
                        max: 50000
                    }
                }]
            }, {
                questionNumber: 18,
                hint: {
                    title: 'Are special animation or special effects required?',
                    description: 'Some video productions are 100% animation and some require no special effects or animation. High quality animation and effects can be very expensieve to produce.'
                },
                title: 'Is there special animation or special effects required?',
                pseudoTitle: 'Animation & Special Effects',
                options: [{
                    title: 'Two to four days of editing',
                    range: {
                        min: 2400,
                        max: 11000
                    }
                }, {
                    title: 'Four to Six days of editing',
                    range: {
                        min: 4800,
                        max: 16000
                    },
                    default: true
                }, {
                    title: 'Seven to ten days of editing',
                    range: {
                        min: 8400,
                        max: 28000
                    }
                }, {
                    title: 'Ten days + of editing',
                    range: {
                        min: 12000,
                        max: 60000
                    }
                }]
            }, {
                questionNumber: 19,
                hint: {
                    title: 'Is music required for your project?',
                    description: `Music is the single most underestimated and under-rated element of any video production. Music set's the tone, the pace and the mood for the entire video. Music tells you how to feel about the video.  Music is very improtant.`
                },
                title: 'Is music required for your project?',
                pseudoTitle: 'Music',
                options: [{
                    title: 'No music is required for this project',
                    range: {
                        min: 0,
                        max: 0
                    }
                }, {
                    title: 'A basic sound track is required',
                    range: {
                        min: 500,
                        max: 2000
                    }
                }, {
                    title: 'Specialized production music is required',
                    range: {
                        min: 2000,
                        max: 10000
                    },
                    default: true
                }, {
                    title: 'Custom music is required',
                    range: {
                        min: 5000,
                        max: 50000
                    }
                }, {
                    title: 'Licensing Popular recorded music is required',
                    range: {
                        min: 10000,
                        max: 1000000
                    }
                }]
            }, {
                questionNumber: 20,
                hint: {
                    title: 'Is voice-over required for this project?',
                    description: 'Professional voice-over can add a great deal of substance and professionalism to your video.'
                },
                title: 'Is voice-over required for this project?',
                pseudoTitle: 'Voice-Over',
                options: [{
                    title: 'No voice-over is need for this project',
                    range: {
                        min: 0,
                        max: 0
                    },
                    default: true
                }, {
                    title: 'We will supply the voice-over talent',
                    range: {
                        min: 500,
                        max: 2000
                    }
                }, {
                    title: 'Professional voice-over talent is required',
                    range: {
                        min: 1000,
                        max: 3000
                    }
                }, {
                    title: 'Celebrity Voice-over talent is required',
                    range: {
                        min: 2000,
                        max: 100000
                    }
                }]
            }, {
                questionNumber: 21,
                hint: {
                    title: 'Is specialized audio work required?',
                    description: 'Beyond recorded voice (either live or voice-over) do you need foley work or other types of specialized music, audio effects or over-dubs?'
                },
                title: 'Is specialized audio work required?',
                pseudoTitle: 'Audio and Foley',
                options: [{
                    title: 'No specialized audio work is needed',
                    range: {
                        min: 0,
                        max: 0
                    }
                }, {
                    title: 'Some basic audio work is required',
                    range: {
                        min: 1000,
                        max: 5000
                    },
                    default: true
                }, {
                    title: 'A moderate amount of audio work is required',
                    range: {
                        min: 3000,
                        max: 10000
                    }
                }, {
                    title: 'A great deal of audio work is required',
                    range: {
                        min: 5000,
                        max: 20000
                    }
                }]
            }, {
                questionNumber: 22,
                hint: {
                    title: 'Stock footage,  photos, illustrations and graphics.',
                    description: 'Do you need specialized media to supplement your video. Stock photos, stock video, specialized illustrations or graphics may be required to complete the video.'
                },
                title: 'Stock footage, photos, illustrations and graphics?',
                pseudoTitle: 'Stock Images and Footage',
                options: [{
                    title: 'No stock footage or photos are required',
                    range: {
                        min: 0,
                        max: 0
                    },
                    default: true
                }, {
                    title: 'Basic photos and/or stock footage is needed',
                    range: {
                        min: 500,
                        max: 2000
                    }
                }, {
                    title: 'Premium phtotos or stock footage is needed',
                    range: {
                        min: 1000,
                        max: 20000
                    }
                }]
            }]
        }],
    }]
}