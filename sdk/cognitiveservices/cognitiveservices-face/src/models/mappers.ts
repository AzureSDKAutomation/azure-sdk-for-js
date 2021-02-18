/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as msRest from "@azure/ms-rest-js";


export const ErrorModel: msRest.CompositeMapper = {
  serializedName: "Error",
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const APIError: msRest.CompositeMapper = {
  serializedName: "APIError",
  type: {
    name: "Composite",
    className: "APIError",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorModel"
        }
      }
    }
  }
};

export const FaceRectangle: msRest.CompositeMapper = {
  serializedName: "FaceRectangle",
  type: {
    name: "Composite",
    className: "FaceRectangle",
    modelProperties: {
      width: {
        required: true,
        serializedName: "width",
        type: {
          name: "Number"
        }
      },
      height: {
        required: true,
        serializedName: "height",
        type: {
          name: "Number"
        }
      },
      left: {
        required: true,
        serializedName: "left",
        type: {
          name: "Number"
        }
      },
      top: {
        required: true,
        serializedName: "top",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Coordinate: msRest.CompositeMapper = {
  serializedName: "Coordinate",
  type: {
    name: "Composite",
    className: "Coordinate",
    modelProperties: {
      x: {
        required: true,
        serializedName: "x",
        type: {
          name: "Number"
        }
      },
      y: {
        required: true,
        serializedName: "y",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const FaceLandmarks: msRest.CompositeMapper = {
  serializedName: "FaceLandmarks",
  type: {
    name: "Composite",
    className: "FaceLandmarks",
    modelProperties: {
      pupilLeft: {
        serializedName: "pupilLeft",
        type: {
          name: "Composite",
          className: "Coordinate"
        }
      },
      pupilRight: {
        serializedName: "pupilRight",
        type: {
          name: "Composite",
          className: "Coordinate"
        }
      },
      noseTip: {
        serializedName: "noseTip",
        type: {
          name: "Composite",
          className: "Coordinate"
        }
      },
      mouthLeft: {
        serializedName: "mouthLeft",
        type: {
          name: "Composite",
          className: "Coordinate"
        }
      },
      mouthRight: {
        serializedName: "mouthRight",
        type: {
          name: "Composite",
          className: "Coordinate"
        }
      },
      eyebrowLeftOuter: {
        serializedName: "eyebrowLeftOuter",
        type: {
          name: "Composite",
          className: "Coordinate"
        }
      },
      eyebrowLeftInner: {
        serializedName: "eyebrowLeftInner",
        type: {
          name: "Composite",
          className: "Coordinate"
        }
      },
      eyeLeftOuter: {
        serializedName: "eyeLeftOuter",
        type: {
          name: "Composite",
          className: "Coordinate"
        }
      },
      eyeLeftTop: {
        serializedName: "eyeLeftTop",
        type: {
          name: "Composite",
          className: "Coordinate"
        }
      },
      eyeLeftBottom: {
        serializedName: "eyeLeftBottom",
        type: {
          name: "Composite",
          className: "Coordinate"
        }
      },
      eyeLeftInner: {
        serializedName: "eyeLeftInner",
        type: {
          name: "Composite",
          className: "Coordinate"
        }
      },
      eyebrowRightInner: {
        serializedName: "eyebrowRightInner",
        type: {
          name: "Composite",
          className: "Coordinate"
        }
      },
      eyebrowRightOuter: {
        serializedName: "eyebrowRightOuter",
        type: {
          name: "Composite",
          className: "Coordinate"
        }
      },
      eyeRightInner: {
        serializedName: "eyeRightInner",
        type: {
          name: "Composite",
          className: "Coordinate"
        }
      },
      eyeRightTop: {
        serializedName: "eyeRightTop",
        type: {
          name: "Composite",
          className: "Coordinate"
        }
      },
      eyeRightBottom: {
        serializedName: "eyeRightBottom",
        type: {
          name: "Composite",
          className: "Coordinate"
        }
      },
      eyeRightOuter: {
        serializedName: "eyeRightOuter",
        type: {
          name: "Composite",
          className: "Coordinate"
        }
      },
      noseRootLeft: {
        serializedName: "noseRootLeft",
        type: {
          name: "Composite",
          className: "Coordinate"
        }
      },
      noseRootRight: {
        serializedName: "noseRootRight",
        type: {
          name: "Composite",
          className: "Coordinate"
        }
      },
      noseLeftAlarTop: {
        serializedName: "noseLeftAlarTop",
        type: {
          name: "Composite",
          className: "Coordinate"
        }
      },
      noseRightAlarTop: {
        serializedName: "noseRightAlarTop",
        type: {
          name: "Composite",
          className: "Coordinate"
        }
      },
      noseLeftAlarOutTip: {
        serializedName: "noseLeftAlarOutTip",
        type: {
          name: "Composite",
          className: "Coordinate"
        }
      },
      noseRightAlarOutTip: {
        serializedName: "noseRightAlarOutTip",
        type: {
          name: "Composite",
          className: "Coordinate"
        }
      },
      upperLipTop: {
        serializedName: "upperLipTop",
        type: {
          name: "Composite",
          className: "Coordinate"
        }
      },
      upperLipBottom: {
        serializedName: "upperLipBottom",
        type: {
          name: "Composite",
          className: "Coordinate"
        }
      },
      underLipTop: {
        serializedName: "underLipTop",
        type: {
          name: "Composite",
          className: "Coordinate"
        }
      },
      underLipBottom: {
        serializedName: "underLipBottom",
        type: {
          name: "Composite",
          className: "Coordinate"
        }
      }
    }
  }
};

export const FacialHair: msRest.CompositeMapper = {
  serializedName: "FacialHair",
  type: {
    name: "Composite",
    className: "FacialHair",
    modelProperties: {
      moustache: {
        nullable: false,
        serializedName: "moustache",
        type: {
          name: "Number"
        }
      },
      beard: {
        nullable: false,
        serializedName: "beard",
        type: {
          name: "Number"
        }
      },
      sideburns: {
        nullable: false,
        serializedName: "sideburns",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const HeadPose: msRest.CompositeMapper = {
  serializedName: "HeadPose",
  type: {
    name: "Composite",
    className: "HeadPose",
    modelProperties: {
      roll: {
        nullable: false,
        serializedName: "roll",
        type: {
          name: "Number"
        }
      },
      yaw: {
        nullable: false,
        serializedName: "yaw",
        type: {
          name: "Number"
        }
      },
      pitch: {
        nullable: false,
        serializedName: "pitch",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Emotion: msRest.CompositeMapper = {
  serializedName: "Emotion",
  type: {
    name: "Composite",
    className: "Emotion",
    modelProperties: {
      anger: {
        nullable: false,
        serializedName: "anger",
        type: {
          name: "Number"
        }
      },
      contempt: {
        nullable: false,
        serializedName: "contempt",
        type: {
          name: "Number"
        }
      },
      disgust: {
        nullable: false,
        serializedName: "disgust",
        type: {
          name: "Number"
        }
      },
      fear: {
        nullable: false,
        serializedName: "fear",
        type: {
          name: "Number"
        }
      },
      happiness: {
        nullable: false,
        serializedName: "happiness",
        type: {
          name: "Number"
        }
      },
      neutral: {
        nullable: false,
        serializedName: "neutral",
        type: {
          name: "Number"
        }
      },
      sadness: {
        nullable: false,
        serializedName: "sadness",
        type: {
          name: "Number"
        }
      },
      surprise: {
        nullable: false,
        serializedName: "surprise",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const HairColor: msRest.CompositeMapper = {
  serializedName: "HairColor",
  type: {
    name: "Composite",
    className: "HairColor",
    modelProperties: {
      color: {
        nullable: false,
        serializedName: "color",
        type: {
          name: "Enum",
          allowedValues: [
            "unknown",
            "white",
            "gray",
            "blond",
            "brown",
            "red",
            "black",
            "other"
          ]
        }
      },
      confidence: {
        nullable: false,
        serializedName: "confidence",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Hair: msRest.CompositeMapper = {
  serializedName: "Hair",
  type: {
    name: "Composite",
    className: "Hair",
    modelProperties: {
      bald: {
        nullable: false,
        serializedName: "bald",
        type: {
          name: "Number"
        }
      },
      invisible: {
        nullable: false,
        serializedName: "invisible",
        type: {
          name: "Boolean"
        }
      },
      hairColor: {
        serializedName: "hairColor",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "HairColor"
            }
          }
        }
      }
    }
  }
};

export const Makeup: msRest.CompositeMapper = {
  serializedName: "Makeup",
  type: {
    name: "Composite",
    className: "Makeup",
    modelProperties: {
      eyeMakeup: {
        nullable: false,
        serializedName: "eyeMakeup",
        type: {
          name: "Boolean"
        }
      },
      lipMakeup: {
        nullable: false,
        serializedName: "lipMakeup",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const Occlusion: msRest.CompositeMapper = {
  serializedName: "Occlusion",
  type: {
    name: "Composite",
    className: "Occlusion",
    modelProperties: {
      foreheadOccluded: {
        nullable: false,
        serializedName: "foreheadOccluded",
        type: {
          name: "Boolean"
        }
      },
      eyeOccluded: {
        nullable: false,
        serializedName: "eyeOccluded",
        type: {
          name: "Boolean"
        }
      },
      mouthOccluded: {
        nullable: false,
        serializedName: "mouthOccluded",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const Accessory: msRest.CompositeMapper = {
  serializedName: "Accessory",
  type: {
    name: "Composite",
    className: "Accessory",
    modelProperties: {
      type: {
        nullable: false,
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: [
            "headWear",
            "glasses",
            "mask"
          ]
        }
      },
      confidence: {
        nullable: false,
        serializedName: "confidence",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Blur: msRest.CompositeMapper = {
  serializedName: "Blur",
  type: {
    name: "Composite",
    className: "Blur",
    modelProperties: {
      blurLevel: {
        nullable: false,
        serializedName: "blurLevel",
        type: {
          name: "Enum",
          allowedValues: [
            "Low",
            "Medium",
            "High"
          ]
        }
      },
      value: {
        nullable: false,
        serializedName: "value",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Exposure: msRest.CompositeMapper = {
  serializedName: "Exposure",
  type: {
    name: "Composite",
    className: "Exposure",
    modelProperties: {
      exposureLevel: {
        nullable: false,
        serializedName: "exposureLevel",
        type: {
          name: "Enum",
          allowedValues: [
            "UnderExposure",
            "GoodExposure",
            "OverExposure"
          ]
        }
      },
      value: {
        nullable: false,
        serializedName: "value",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Noise: msRest.CompositeMapper = {
  serializedName: "Noise",
  type: {
    name: "Composite",
    className: "Noise",
    modelProperties: {
      noiseLevel: {
        nullable: false,
        serializedName: "noiseLevel",
        type: {
          name: "Enum",
          allowedValues: [
            "Low",
            "Medium",
            "High"
          ]
        }
      },
      value: {
        nullable: false,
        serializedName: "value",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const FaceAttributes: msRest.CompositeMapper = {
  serializedName: "FaceAttributes",
  type: {
    name: "Composite",
    className: "FaceAttributes",
    modelProperties: {
      age: {
        serializedName: "age",
        type: {
          name: "Number"
        }
      },
      gender: {
        serializedName: "gender",
        type: {
          name: "Enum",
          allowedValues: [
            "male",
            "female"
          ]
        }
      },
      smile: {
        serializedName: "smile",
        type: {
          name: "Number"
        }
      },
      facialHair: {
        serializedName: "facialHair",
        type: {
          name: "Composite",
          className: "FacialHair"
        }
      },
      glasses: {
        serializedName: "glasses",
        type: {
          name: "Enum",
          allowedValues: [
            "noGlasses",
            "readingGlasses",
            "sunglasses",
            "swimmingGoggles"
          ]
        }
      },
      headPose: {
        serializedName: "headPose",
        type: {
          name: "Composite",
          className: "HeadPose"
        }
      },
      emotion: {
        serializedName: "emotion",
        type: {
          name: "Composite",
          className: "Emotion"
        }
      },
      hair: {
        serializedName: "hair",
        type: {
          name: "Composite",
          className: "Hair"
        }
      },
      makeup: {
        serializedName: "makeup",
        type: {
          name: "Composite",
          className: "Makeup"
        }
      },
      occlusion: {
        serializedName: "occlusion",
        type: {
          name: "Composite",
          className: "Occlusion"
        }
      },
      accessories: {
        serializedName: "accessories",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Accessory"
            }
          }
        }
      },
      blur: {
        serializedName: "blur",
        type: {
          name: "Composite",
          className: "Blur"
        }
      },
      exposure: {
        serializedName: "exposure",
        type: {
          name: "Composite",
          className: "Exposure"
        }
      },
      noise: {
        serializedName: "noise",
        type: {
          name: "Composite",
          className: "Noise"
        }
      }
    }
  }
};

export const DetectedFace: msRest.CompositeMapper = {
  serializedName: "DetectedFace",
  type: {
    name: "Composite",
    className: "DetectedFace",
    modelProperties: {
      faceId: {
        serializedName: "faceId",
        type: {
          name: "Uuid"
        }
      },
      recognitionModel: {
        nullable: false,
        serializedName: "recognitionModel",
        defaultValue: 'recognition_01',
        type: {
          name: "String"
        }
      },
      faceRectangle: {
        required: true,
        serializedName: "faceRectangle",
        type: {
          name: "Composite",
          className: "FaceRectangle"
        }
      },
      faceLandmarks: {
        serializedName: "faceLandmarks",
        type: {
          name: "Composite",
          className: "FaceLandmarks"
        }
      },
      faceAttributes: {
        serializedName: "faceAttributes",
        type: {
          name: "Composite",
          className: "FaceAttributes"
        }
      }
    }
  }
};

export const FindSimilarRequest: msRest.CompositeMapper = {
  serializedName: "FindSimilarRequest",
  type: {
    name: "Composite",
    className: "FindSimilarRequest",
    modelProperties: {
      faceId: {
        required: true,
        serializedName: "faceId",
        type: {
          name: "Uuid"
        }
      },
      faceListId: {
        serializedName: "faceListId",
        constraints: {
          MaxLength: 64,
          Pattern: /^[a-z0-9-_]+$/
        },
        type: {
          name: "String"
        }
      },
      largeFaceListId: {
        serializedName: "largeFaceListId",
        constraints: {
          MaxLength: 64,
          Pattern: /^[a-z0-9-_]+$/
        },
        type: {
          name: "String"
        }
      },
      faceIds: {
        serializedName: "faceIds",
        constraints: {
          MaxItems: 1000
        },
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Uuid"
            }
          }
        }
      },
      maxNumOfCandidatesReturned: {
        serializedName: "maxNumOfCandidatesReturned",
        defaultValue: 20,
        constraints: {
          InclusiveMaximum: 1000,
          InclusiveMinimum: 1
        },
        type: {
          name: "Number"
        }
      },
      mode: {
        nullable: false,
        serializedName: "mode",
        defaultValue: 'matchPerson',
        type: {
          name: "Enum",
          allowedValues: [
            "matchPerson",
            "matchFace"
          ]
        }
      }
    }
  }
};

export const SimilarFace: msRest.CompositeMapper = {
  serializedName: "SimilarFace",
  type: {
    name: "Composite",
    className: "SimilarFace",
    modelProperties: {
      faceId: {
        serializedName: "faceId",
        type: {
          name: "Uuid"
        }
      },
      persistedFaceId: {
        serializedName: "persistedFaceId",
        type: {
          name: "Uuid"
        }
      },
      confidence: {
        required: true,
        serializedName: "confidence",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const GroupRequest: msRest.CompositeMapper = {
  serializedName: "GroupRequest",
  type: {
    name: "Composite",
    className: "GroupRequest",
    modelProperties: {
      faceIds: {
        required: true,
        serializedName: "faceIds",
        constraints: {
          MaxItems: 1000
        },
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Uuid"
            }
          }
        }
      }
    }
  }
};

export const GroupResult: msRest.CompositeMapper = {
  serializedName: "GroupResult",
  type: {
    name: "Composite",
    className: "GroupResult",
    modelProperties: {
      groups: {
        required: true,
        serializedName: "groups",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Sequence",
              element: {
                type: {
                  name: "Uuid"
                }
              }
            }
          }
        }
      },
      messyGroup: {
        serializedName: "messyGroup",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Uuid"
            }
          }
        }
      }
    }
  }
};

export const IdentifyRequest: msRest.CompositeMapper = {
  serializedName: "IdentifyRequest",
  type: {
    name: "Composite",
    className: "IdentifyRequest",
    modelProperties: {
      faceIds: {
        required: true,
        serializedName: "faceIds",
        constraints: {
          MaxItems: 10
        },
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Uuid"
            }
          }
        }
      },
      personGroupId: {
        serializedName: "personGroupId",
        constraints: {
          MaxLength: 64,
          Pattern: /^[a-z0-9-_]+$/
        },
        type: {
          name: "String"
        }
      },
      largePersonGroupId: {
        serializedName: "largePersonGroupId",
        constraints: {
          MaxLength: 64,
          Pattern: /^[a-z0-9-_]+$/
        },
        type: {
          name: "String"
        }
      },
      maxNumOfCandidatesReturned: {
        serializedName: "maxNumOfCandidatesReturned",
        defaultValue: 1,
        constraints: {
          InclusiveMaximum: 5,
          InclusiveMinimum: 1
        },
        type: {
          name: "Number"
        }
      },
      confidenceThreshold: {
        serializedName: "confidenceThreshold",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const IdentifyCandidate: msRest.CompositeMapper = {
  serializedName: "IdentifyCandidate",
  type: {
    name: "Composite",
    className: "IdentifyCandidate",
    modelProperties: {
      personId: {
        required: true,
        serializedName: "personId",
        type: {
          name: "Uuid"
        }
      },
      confidence: {
        required: true,
        serializedName: "confidence",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const IdentifyResult: msRest.CompositeMapper = {
  serializedName: "IdentifyResult",
  type: {
    name: "Composite",
    className: "IdentifyResult",
    modelProperties: {
      faceId: {
        required: true,
        serializedName: "faceId",
        type: {
          name: "Uuid"
        }
      },
      candidates: {
        required: true,
        serializedName: "candidates",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "IdentifyCandidate"
            }
          }
        }
      }
    }
  }
};

export const VerifyFaceToPersonRequest: msRest.CompositeMapper = {
  serializedName: "VerifyFaceToPersonRequest",
  type: {
    name: "Composite",
    className: "VerifyFaceToPersonRequest",
    modelProperties: {
      faceId: {
        required: true,
        serializedName: "faceId",
        type: {
          name: "Uuid"
        }
      },
      personGroupId: {
        serializedName: "personGroupId",
        constraints: {
          MaxLength: 64,
          Pattern: /^[a-z0-9-_]+$/
        },
        type: {
          name: "String"
        }
      },
      largePersonGroupId: {
        serializedName: "largePersonGroupId",
        constraints: {
          MaxLength: 64,
          Pattern: /^[a-z0-9-_]+$/
        },
        type: {
          name: "String"
        }
      },
      personId: {
        required: true,
        serializedName: "personId",
        type: {
          name: "Uuid"
        }
      }
    }
  }
};

export const VerifyFaceToFaceRequest: msRest.CompositeMapper = {
  serializedName: "VerifyFaceToFaceRequest",
  type: {
    name: "Composite",
    className: "VerifyFaceToFaceRequest",
    modelProperties: {
      faceId1: {
        required: true,
        serializedName: "faceId1",
        type: {
          name: "Uuid"
        }
      },
      faceId2: {
        required: true,
        serializedName: "faceId2",
        type: {
          name: "Uuid"
        }
      }
    }
  }
};

export const VerifyResult: msRest.CompositeMapper = {
  serializedName: "VerifyResult",
  type: {
    name: "Composite",
    className: "VerifyResult",
    modelProperties: {
      isIdentical: {
        required: true,
        serializedName: "isIdentical",
        type: {
          name: "Boolean"
        }
      },
      confidence: {
        required: true,
        serializedName: "confidence",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const PersistedFace: msRest.CompositeMapper = {
  serializedName: "PersistedFace",
  type: {
    name: "Composite",
    className: "PersistedFace",
    modelProperties: {
      persistedFaceId: {
        required: true,
        serializedName: "persistedFaceId",
        type: {
          name: "Uuid"
        }
      },
      userData: {
        serializedName: "userData",
        constraints: {
          MaxLength: 1024
        },
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NameAndUserDataContract: msRest.CompositeMapper = {
  serializedName: "NameAndUserDataContract",
  type: {
    name: "Composite",
    className: "NameAndUserDataContract",
    modelProperties: {
      name: {
        serializedName: "name",
        constraints: {
          MaxLength: 128
        },
        type: {
          name: "String"
        }
      },
      userData: {
        serializedName: "userData",
        constraints: {
          MaxLength: 16384
        },
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MetaDataContract: msRest.CompositeMapper = {
  serializedName: "MetaDataContract",
  type: {
    name: "Composite",
    className: "MetaDataContract",
    modelProperties: {
      ...NameAndUserDataContract.type.modelProperties,
      recognitionModel: {
        nullable: false,
        serializedName: "recognitionModel",
        defaultValue: 'recognition_01',
        type: {
          name: "String"
        }
      }
    }
  }
};

export const FaceList: msRest.CompositeMapper = {
  serializedName: "FaceList",
  type: {
    name: "Composite",
    className: "FaceList",
    modelProperties: {
      ...MetaDataContract.type.modelProperties,
      faceListId: {
        required: true,
        serializedName: "faceListId",
        constraints: {
          MaxLength: 64,
          Pattern: /^[a-z0-9-_]+$/
        },
        type: {
          name: "String"
        }
      },
      persistedFaces: {
        serializedName: "persistedFaces",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PersistedFace"
            }
          }
        }
      }
    }
  }
};

export const PersonGroup: msRest.CompositeMapper = {
  serializedName: "PersonGroup",
  type: {
    name: "Composite",
    className: "PersonGroup",
    modelProperties: {
      ...MetaDataContract.type.modelProperties,
      personGroupId: {
        required: true,
        serializedName: "personGroupId",
        constraints: {
          MaxLength: 64,
          Pattern: /^[a-z0-9-_]+$/
        },
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Person: msRest.CompositeMapper = {
  serializedName: "Person",
  type: {
    name: "Composite",
    className: "Person",
    modelProperties: {
      ...NameAndUserDataContract.type.modelProperties,
      personId: {
        required: true,
        serializedName: "personId",
        type: {
          name: "Uuid"
        }
      },
      persistedFaceIds: {
        serializedName: "persistedFaceIds",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Uuid"
            }
          }
        }
      }
    }
  }
};

export const LargeFaceList: msRest.CompositeMapper = {
  serializedName: "LargeFaceList",
  type: {
    name: "Composite",
    className: "LargeFaceList",
    modelProperties: {
      ...MetaDataContract.type.modelProperties,
      largeFaceListId: {
        required: true,
        serializedName: "largeFaceListId",
        constraints: {
          MaxLength: 64,
          Pattern: /^[a-z0-9-_]+$/
        },
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LargePersonGroup: msRest.CompositeMapper = {
  serializedName: "LargePersonGroup",
  type: {
    name: "Composite",
    className: "LargePersonGroup",
    modelProperties: {
      ...MetaDataContract.type.modelProperties,
      largePersonGroupId: {
        required: true,
        serializedName: "largePersonGroupId",
        constraints: {
          MaxLength: 64,
          Pattern: /^[a-z0-9-_]+$/
        },
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UpdateFaceRequest: msRest.CompositeMapper = {
  serializedName: "UpdateFaceRequest",
  type: {
    name: "Composite",
    className: "UpdateFaceRequest",
    modelProperties: {
      userData: {
        serializedName: "userData",
        constraints: {
          MaxLength: 1024
        },
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TrainingStatus: msRest.CompositeMapper = {
  serializedName: "TrainingStatus",
  type: {
    name: "Composite",
    className: "TrainingStatus",
    modelProperties: {
      status: {
        required: true,
        serializedName: "status",
        type: {
          name: "Enum",
          allowedValues: [
            "nonstarted",
            "running",
            "succeeded",
            "failed"
          ]
        }
      },
      created: {
        required: true,
        serializedName: "createdDateTime",
        type: {
          name: "DateTime"
        }
      },
      lastAction: {
        serializedName: "lastActionDateTime",
        type: {
          name: "DateTime"
        }
      },
      lastSuccessfulTraining: {
        serializedName: "lastSuccessfulTrainingDateTime",
        type: {
          name: "DateTime"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ApplySnapshotRequest: msRest.CompositeMapper = {
  serializedName: "ApplySnapshotRequest",
  type: {
    name: "Composite",
    className: "ApplySnapshotRequest",
    modelProperties: {
      objectId: {
        required: true,
        serializedName: "objectId",
        constraints: {
          MaxLength: 64,
          Pattern: /^[a-z0-9-_]+$/
        },
        type: {
          name: "String"
        }
      },
      mode: {
        nullable: false,
        serializedName: "mode",
        defaultValue: 'CreateNew',
        type: {
          name: "Enum",
          allowedValues: [
            "CreateNew"
          ]
        }
      }
    }
  }
};

export const Snapshot: msRest.CompositeMapper = {
  serializedName: "Snapshot",
  type: {
    name: "Composite",
    className: "Snapshot",
    modelProperties: {
      id: {
        required: true,
        serializedName: "id",
        type: {
          name: "Uuid"
        }
      },
      account: {
        required: true,
        serializedName: "account",
        type: {
          name: "String"
        }
      },
      type: {
        required: true,
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: [
            "FaceList",
            "LargeFaceList",
            "LargePersonGroup",
            "PersonGroup"
          ]
        }
      },
      applyScope: {
        required: true,
        serializedName: "applyScope",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Uuid"
            }
          }
        }
      },
      userData: {
        serializedName: "userData",
        constraints: {
          MaxLength: 16384
        },
        type: {
          name: "String"
        }
      },
      createdTime: {
        required: true,
        serializedName: "createdTime",
        type: {
          name: "DateTime"
        }
      },
      lastUpdateTime: {
        required: true,
        serializedName: "lastUpdateTime",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const TakeSnapshotRequest: msRest.CompositeMapper = {
  serializedName: "TakeSnapshotRequest",
  type: {
    name: "Composite",
    className: "TakeSnapshotRequest",
    modelProperties: {
      type: {
        required: true,
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: [
            "FaceList",
            "LargeFaceList",
            "LargePersonGroup",
            "PersonGroup"
          ]
        }
      },
      objectId: {
        required: true,
        serializedName: "objectId",
        constraints: {
          MaxLength: 64,
          Pattern: /^[a-z0-9-_]+$/
        },
        type: {
          name: "String"
        }
      },
      applyScope: {
        required: true,
        serializedName: "applyScope",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Uuid"
            }
          }
        }
      },
      userData: {
        serializedName: "userData",
        constraints: {
          MaxLength: 16384
        },
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UpdateSnapshotRequest: msRest.CompositeMapper = {
  serializedName: "UpdateSnapshotRequest",
  type: {
    name: "Composite",
    className: "UpdateSnapshotRequest",
    modelProperties: {
      applyScope: {
        serializedName: "applyScope",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Uuid"
            }
          }
        }
      },
      userData: {
        serializedName: "userData",
        constraints: {
          MaxLength: 16384
        },
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationStatus: msRest.CompositeMapper = {
  serializedName: "OperationStatus",
  type: {
    name: "Composite",
    className: "OperationStatus",
    modelProperties: {
      status: {
        required: true,
        serializedName: "status",
        type: {
          name: "Enum",
          allowedValues: [
            "notstarted",
            "running",
            "succeeded",
            "failed"
          ]
        }
      },
      createdTime: {
        required: true,
        serializedName: "createdTime",
        type: {
          name: "DateTime"
        }
      },
      lastActionTime: {
        serializedName: "lastActionTime",
        type: {
          name: "DateTime"
        }
      },
      resourceLocation: {
        serializedName: "resourceLocation",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ImageUrl: msRest.CompositeMapper = {
  serializedName: "ImageUrl",
  type: {
    name: "Composite",
    className: "ImageUrl",
    modelProperties: {
      url: {
        required: true,
        serializedName: "url",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SnapshotTakeHeaders: msRest.CompositeMapper = {
  serializedName: "snapshot-take-headers",
  type: {
    name: "Composite",
    className: "SnapshotTakeHeaders",
    modelProperties: {
      operationLocation: {
        serializedName: "operation-location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SnapshotApplyHeaders: msRest.CompositeMapper = {
  serializedName: "snapshot-apply-headers",
  type: {
    name: "Composite",
    className: "SnapshotApplyHeaders",
    modelProperties: {
      operationLocation: {
        serializedName: "operation-location",
        type: {
          name: "String"
        }
      }
    }
  }
};
