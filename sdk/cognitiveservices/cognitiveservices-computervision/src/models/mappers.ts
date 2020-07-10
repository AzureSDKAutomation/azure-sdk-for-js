/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as msRest from "@azure/ms-rest-js";


export const FaceRectangle: msRest.CompositeMapper = {
  serializedName: "FaceRectangle",
  type: {
    name: "Composite",
    className: "FaceRectangle",
    modelProperties: {
      left: {
        nullable: false,
        serializedName: "left",
        type: {
          name: "Number"
        }
      },
      top: {
        nullable: false,
        serializedName: "top",
        type: {
          name: "Number"
        }
      },
      width: {
        nullable: false,
        serializedName: "width",
        type: {
          name: "Number"
        }
      },
      height: {
        nullable: false,
        serializedName: "height",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const CelebritiesModel: msRest.CompositeMapper = {
  serializedName: "CelebritiesModel",
  type: {
    name: "Composite",
    className: "CelebritiesModel",
    modelProperties: {
      name: {
        nullable: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      confidence: {
        nullable: false,
        serializedName: "confidence",
        type: {
          name: "Number"
        }
      },
      faceRectangle: {
        serializedName: "faceRectangle",
        type: {
          name: "Composite",
          className: "FaceRectangle"
        }
      }
    }
  }
};

export const LandmarksModel: msRest.CompositeMapper = {
  serializedName: "LandmarksModel",
  type: {
    name: "Composite",
    className: "LandmarksModel",
    modelProperties: {
      name: {
        nullable: true,
        serializedName: "name",
        type: {
          name: "String"
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

export const CategoryDetail: msRest.CompositeMapper = {
  serializedName: "CategoryDetail",
  type: {
    name: "Composite",
    className: "CategoryDetail",
    modelProperties: {
      celebrities: {
        nullable: true,
        serializedName: "celebrities",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CelebritiesModel"
            }
          }
        }
      },
      landmarks: {
        nullable: true,
        serializedName: "landmarks",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LandmarksModel"
            }
          }
        }
      }
    }
  }
};

export const Category: msRest.CompositeMapper = {
  serializedName: "Category",
  type: {
    name: "Composite",
    className: "Category",
    modelProperties: {
      name: {
        nullable: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      score: {
        nullable: false,
        serializedName: "score",
        type: {
          name: "Number"
        }
      },
      detail: {
        serializedName: "detail",
        type: {
          name: "Composite",
          className: "CategoryDetail"
        }
      }
    }
  }
};

export const AdultInfo: msRest.CompositeMapper = {
  serializedName: "AdultInfo",
  type: {
    name: "Composite",
    className: "AdultInfo",
    modelProperties: {
      isAdultContent: {
        nullable: false,
        serializedName: "isAdultContent",
        type: {
          name: "Boolean"
        }
      },
      isRacyContent: {
        nullable: false,
        serializedName: "isRacyContent",
        type: {
          name: "Boolean"
        }
      },
      isGoryContent: {
        nullable: false,
        serializedName: "isGoryContent",
        type: {
          name: "Boolean"
        }
      },
      adultScore: {
        nullable: false,
        serializedName: "adultScore",
        type: {
          name: "Number"
        }
      },
      racyScore: {
        nullable: false,
        serializedName: "racyScore",
        type: {
          name: "Number"
        }
      },
      goreScore: {
        nullable: false,
        serializedName: "goreScore",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ColorInfo: msRest.CompositeMapper = {
  serializedName: "ColorInfo",
  type: {
    name: "Composite",
    className: "ColorInfo",
    modelProperties: {
      dominantColorForeground: {
        nullable: true,
        serializedName: "dominantColorForeground",
        type: {
          name: "String"
        }
      },
      dominantColorBackground: {
        nullable: true,
        serializedName: "dominantColorBackground",
        type: {
          name: "String"
        }
      },
      dominantColors: {
        nullable: true,
        serializedName: "dominantColors",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      accentColor: {
        nullable: true,
        serializedName: "accentColor",
        type: {
          name: "String"
        }
      },
      isBWImg: {
        nullable: false,
        serializedName: "isBWImg",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ImageType: msRest.CompositeMapper = {
  serializedName: "ImageType",
  type: {
    name: "Composite",
    className: "ImageType",
    modelProperties: {
      clipArtType: {
        nullable: false,
        serializedName: "clipArtType",
        type: {
          name: "Number"
        }
      },
      lineDrawingType: {
        nullable: false,
        serializedName: "lineDrawingType",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ImageTag: msRest.CompositeMapper = {
  serializedName: "ImageTag",
  type: {
    name: "Composite",
    className: "ImageTag",
    modelProperties: {
      name: {
        nullable: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      confidence: {
        nullable: false,
        serializedName: "confidence",
        type: {
          name: "Number"
        }
      },
      hint: {
        nullable: true,
        serializedName: "hint",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ImageCaption: msRest.CompositeMapper = {
  serializedName: "ImageCaption",
  type: {
    name: "Composite",
    className: "ImageCaption",
    modelProperties: {
      text: {
        nullable: true,
        serializedName: "text",
        type: {
          name: "String"
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

export const ImageDescriptionDetails: msRest.CompositeMapper = {
  serializedName: "ImageDescriptionDetails",
  type: {
    name: "Composite",
    className: "ImageDescriptionDetails",
    modelProperties: {
      tags: {
        nullable: true,
        serializedName: "tags",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      captions: {
        nullable: true,
        serializedName: "captions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ImageCaption"
            }
          }
        }
      }
    }
  }
};

export const FaceDescription: msRest.CompositeMapper = {
  serializedName: "FaceDescription",
  type: {
    name: "Composite",
    className: "FaceDescription",
    modelProperties: {
      age: {
        nullable: false,
        serializedName: "age",
        type: {
          name: "Number"
        }
      },
      gender: {
        nullable: true,
        serializedName: "gender",
        type: {
          name: "Enum",
          allowedValues: [
            "Male",
            "Female"
          ]
        }
      },
      faceRectangle: {
        serializedName: "faceRectangle",
        type: {
          name: "Composite",
          className: "FaceRectangle"
        }
      }
    }
  }
};

export const BoundingRect: msRest.CompositeMapper = {
  serializedName: "BoundingRect",
  type: {
    name: "Composite",
    className: "BoundingRect",
    modelProperties: {
      x: {
        nullable: false,
        serializedName: "x",
        type: {
          name: "Number"
        }
      },
      y: {
        nullable: false,
        serializedName: "y",
        type: {
          name: "Number"
        }
      },
      w: {
        nullable: false,
        serializedName: "w",
        type: {
          name: "Number"
        }
      },
      h: {
        nullable: false,
        serializedName: "h",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ObjectHierarchy: msRest.CompositeMapper = {
  serializedName: "ObjectHierarchy",
  type: {
    name: "Composite",
    className: "ObjectHierarchy",
    modelProperties: {
      object: {
        nullable: true,
        serializedName: "object",
        type: {
          name: "String"
        }
      },
      confidence: {
        nullable: false,
        serializedName: "confidence",
        type: {
          name: "Number"
        }
      },
      parent: {
        serializedName: "parent",
        type: {
          name: "Composite",
          className: "ObjectHierarchy"
        }
      }
    }
  }
};

export const DetectedObject: msRest.CompositeMapper = {
  serializedName: "DetectedObject",
  type: {
    name: "Composite",
    className: "DetectedObject",
    modelProperties: {
      rectangle: {
        readOnly: true,
        serializedName: "rectangle",
        type: {
          name: "Composite",
          className: "BoundingRect"
        }
      },
      object: {
        nullable: true,
        serializedName: "object",
        type: {
          name: "String"
        }
      },
      confidence: {
        nullable: false,
        serializedName: "confidence",
        type: {
          name: "Number"
        }
      },
      parent: {
        serializedName: "parent",
        type: {
          name: "Composite",
          className: "ObjectHierarchy"
        }
      }
    }
  }
};

export const DetectedBrand: msRest.CompositeMapper = {
  serializedName: "DetectedBrand",
  type: {
    name: "Composite",
    className: "DetectedBrand",
    modelProperties: {
      name: {
        nullable: true,
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      confidence: {
        nullable: false,
        readOnly: true,
        serializedName: "confidence",
        type: {
          name: "Number"
        }
      },
      rectangle: {
        readOnly: true,
        serializedName: "rectangle",
        type: {
          name: "Composite",
          className: "BoundingRect"
        }
      }
    }
  }
};

export const ImageMetadata: msRest.CompositeMapper = {
  serializedName: "ImageMetadata",
  type: {
    name: "Composite",
    className: "ImageMetadata",
    modelProperties: {
      width: {
        nullable: false,
        serializedName: "width",
        type: {
          name: "Number"
        }
      },
      height: {
        nullable: false,
        serializedName: "height",
        type: {
          name: "Number"
        }
      },
      format: {
        nullable: true,
        serializedName: "format",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ImageAnalysis: msRest.CompositeMapper = {
  serializedName: "ImageAnalysis",
  type: {
    name: "Composite",
    className: "ImageAnalysis",
    modelProperties: {
      categories: {
        nullable: true,
        serializedName: "categories",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Category"
            }
          }
        }
      },
      adult: {
        serializedName: "adult",
        type: {
          name: "Composite",
          className: "AdultInfo"
        }
      },
      color: {
        serializedName: "color",
        type: {
          name: "Composite",
          className: "ColorInfo"
        }
      },
      imageType: {
        serializedName: "imageType",
        type: {
          name: "Composite",
          className: "ImageType"
        }
      },
      tags: {
        nullable: true,
        serializedName: "tags",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ImageTag"
            }
          }
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "Composite",
          className: "ImageDescriptionDetails"
        }
      },
      faces: {
        nullable: true,
        serializedName: "faces",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FaceDescription"
            }
          }
        }
      },
      objects: {
        nullable: true,
        serializedName: "objects",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DetectedObject"
            }
          }
        }
      },
      brands: {
        nullable: true,
        serializedName: "brands",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DetectedBrand"
            }
          }
        }
      },
      requestId: {
        nullable: true,
        serializedName: "requestId",
        type: {
          name: "String"
        }
      },
      metadata: {
        serializedName: "metadata",
        type: {
          name: "Composite",
          className: "ImageMetadata"
        }
      }
    }
  }
};

export const ImageDescription: msRest.CompositeMapper = {
  serializedName: "ImageDescription",
  type: {
    name: "Composite",
    className: "ImageDescription",
    modelProperties: {
      tags: {
        nullable: true,
        serializedName: "description.tags",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      captions: {
        nullable: true,
        serializedName: "description.captions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ImageCaption"
            }
          }
        }
      },
      requestId: {
        nullable: true,
        serializedName: "requestId",
        type: {
          name: "String"
        }
      },
      metadata: {
        serializedName: "metadata",
        type: {
          name: "Composite",
          className: "ImageMetadata"
        }
      }
    }
  }
};

export const DetectResult: msRest.CompositeMapper = {
  serializedName: "DetectResult",
  type: {
    name: "Composite",
    className: "DetectResult",
    modelProperties: {
      objects: {
        nullable: true,
        readOnly: true,
        serializedName: "objects",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DetectedObject"
            }
          }
        }
      },
      requestId: {
        nullable: true,
        serializedName: "requestId",
        type: {
          name: "String"
        }
      },
      metadata: {
        serializedName: "metadata",
        type: {
          name: "Composite",
          className: "ImageMetadata"
        }
      }
    }
  }
};

export const ModelDescription: msRest.CompositeMapper = {
  serializedName: "ModelDescription",
  type: {
    name: "Composite",
    className: "ModelDescription",
    modelProperties: {
      name: {
        nullable: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      categories: {
        nullable: true,
        serializedName: "categories",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ListModelsResult: msRest.CompositeMapper = {
  serializedName: "ListModelsResult",
  type: {
    name: "Composite",
    className: "ListModelsResult",
    modelProperties: {
      modelsProperty: {
        nullable: true,
        readOnly: true,
        serializedName: "models",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ModelDescription"
            }
          }
        }
      }
    }
  }
};

export const DomainModelResults: msRest.CompositeMapper = {
  serializedName: "DomainModelResults",
  type: {
    name: "Composite",
    className: "DomainModelResults",
    modelProperties: {
      result: {
        serializedName: "result",
        type: {
          name: "Object"
        }
      },
      requestId: {
        nullable: true,
        serializedName: "requestId",
        type: {
          name: "String"
        }
      },
      metadata: {
        serializedName: "metadata",
        type: {
          name: "Composite",
          className: "ImageMetadata"
        }
      }
    }
  }
};

export const OcrWord: msRest.CompositeMapper = {
  serializedName: "OcrWord",
  type: {
    name: "Composite",
    className: "OcrWord",
    modelProperties: {
      boundingBox: {
        nullable: true,
        serializedName: "boundingBox",
        type: {
          name: "String"
        }
      },
      text: {
        nullable: true,
        serializedName: "text",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OcrLine: msRest.CompositeMapper = {
  serializedName: "OcrLine",
  type: {
    name: "Composite",
    className: "OcrLine",
    modelProperties: {
      boundingBox: {
        nullable: true,
        serializedName: "boundingBox",
        type: {
          name: "String"
        }
      },
      words: {
        nullable: true,
        serializedName: "words",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OcrWord"
            }
          }
        }
      }
    }
  }
};

export const OcrRegion: msRest.CompositeMapper = {
  serializedName: "OcrRegion",
  type: {
    name: "Composite",
    className: "OcrRegion",
    modelProperties: {
      boundingBox: {
        nullable: true,
        serializedName: "boundingBox",
        type: {
          name: "String"
        }
      },
      lines: {
        nullable: true,
        serializedName: "lines",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OcrLine"
            }
          }
        }
      }
    }
  }
};

export const OcrResult: msRest.CompositeMapper = {
  serializedName: "OcrResult",
  type: {
    name: "Composite",
    className: "OcrResult",
    modelProperties: {
      language: {
        nullable: true,
        serializedName: "language",
        type: {
          name: "String"
        }
      },
      textAngle: {
        nullable: false,
        serializedName: "textAngle",
        type: {
          name: "Number"
        }
      },
      orientation: {
        nullable: true,
        serializedName: "orientation",
        type: {
          name: "String"
        }
      },
      regions: {
        nullable: true,
        serializedName: "regions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OcrRegion"
            }
          }
        }
      }
    }
  }
};

export const TagResult: msRest.CompositeMapper = {
  serializedName: "TagResult",
  type: {
    name: "Composite",
    className: "TagResult",
    modelProperties: {
      tags: {
        nullable: true,
        serializedName: "tags",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ImageTag"
            }
          }
        }
      },
      requestId: {
        nullable: true,
        serializedName: "requestId",
        type: {
          name: "String"
        }
      },
      metadata: {
        serializedName: "metadata",
        type: {
          name: "Composite",
          className: "ImageMetadata"
        }
      }
    }
  }
};

export const AreaOfInterestResult: msRest.CompositeMapper = {
  serializedName: "AreaOfInterestResult",
  type: {
    name: "Composite",
    className: "AreaOfInterestResult",
    modelProperties: {
      areaOfInterest: {
        readOnly: true,
        serializedName: "areaOfInterest",
        type: {
          name: "Composite",
          className: "BoundingRect"
        }
      },
      requestId: {
        nullable: true,
        serializedName: "requestId",
        type: {
          name: "String"
        }
      },
      metadata: {
        serializedName: "metadata",
        type: {
          name: "Composite",
          className: "ImageMetadata"
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

export const ComputerVisionError: msRest.CompositeMapper = {
  serializedName: "ComputerVisionError",
  type: {
    name: "Composite",
    className: "ComputerVisionError",
    modelProperties: {
      code: {
        required: true,
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        required: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "requestId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LandmarkResults: msRest.CompositeMapper = {
  serializedName: "LandmarkResults",
  type: {
    name: "Composite",
    className: "LandmarkResults",
    modelProperties: {
      landmarks: {
        nullable: true,
        serializedName: "landmarks",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LandmarksModel"
            }
          }
        }
      },
      requestId: {
        nullable: true,
        serializedName: "requestId",
        type: {
          name: "String"
        }
      },
      metadata: {
        serializedName: "metadata",
        type: {
          name: "Composite",
          className: "ImageMetadata"
        }
      }
    }
  }
};

export const CelebrityResults: msRest.CompositeMapper = {
  serializedName: "CelebrityResults",
  type: {
    name: "Composite",
    className: "CelebrityResults",
    modelProperties: {
      celebrities: {
        nullable: true,
        serializedName: "celebrities",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CelebritiesModel"
            }
          }
        }
      },
      requestId: {
        nullable: true,
        serializedName: "requestId",
        type: {
          name: "String"
        }
      },
      metadata: {
        serializedName: "metadata",
        type: {
          name: "Composite",
          className: "ImageMetadata"
        }
      }
    }
  }
};

export const Word: msRest.CompositeMapper = {
  serializedName: "Word",
  type: {
    name: "Composite",
    className: "Word",
    modelProperties: {
      boundingBox: {
        required: true,
        serializedName: "boundingBox",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      text: {
        required: true,
        serializedName: "text",
        type: {
          name: "String"
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

export const Line: msRest.CompositeMapper = {
  serializedName: "Line",
  type: {
    name: "Composite",
    className: "Line",
    modelProperties: {
      language: {
        serializedName: "language",
        type: {
          name: "String"
        }
      },
      boundingBox: {
        required: true,
        serializedName: "boundingBox",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      text: {
        required: true,
        serializedName: "text",
        type: {
          name: "String"
        }
      },
      words: {
        required: true,
        serializedName: "words",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Word"
            }
          }
        }
      }
    }
  }
};

export const ReadResult: msRest.CompositeMapper = {
  serializedName: "ReadResult",
  type: {
    name: "Composite",
    className: "ReadResult",
    modelProperties: {
      page: {
        required: true,
        serializedName: "page",
        type: {
          name: "Number"
        }
      },
      language: {
        serializedName: "language",
        type: {
          name: "String"
        }
      },
      angle: {
        required: true,
        serializedName: "angle",
        type: {
          name: "Number"
        }
      },
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
      unit: {
        required: true,
        nullable: false,
        serializedName: "unit",
        type: {
          name: "Enum",
          allowedValues: [
            "pixel",
            "inch"
          ]
        }
      },
      lines: {
        required: true,
        serializedName: "lines",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Line"
            }
          }
        }
      }
    }
  }
};

export const AnalyzeResults: msRest.CompositeMapper = {
  serializedName: "analyzeResults",
  type: {
    name: "Composite",
    className: "AnalyzeResults",
    modelProperties: {
      version: {
        required: true,
        serializedName: "version",
        type: {
          name: "String"
        }
      },
      readResults: {
        required: true,
        serializedName: "readResults",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ReadResult"
            }
          }
        }
      }
    }
  }
};

export const ReadOperationResult: msRest.CompositeMapper = {
  serializedName: "ReadOperationResult",
  type: {
    name: "Composite",
    className: "ReadOperationResult",
    modelProperties: {
      status: {
        nullable: false,
        serializedName: "status",
        type: {
          name: "Enum",
          allowedValues: [
            "notStarted",
            "running",
            "failed",
            "succeeded"
          ]
        }
      },
      createdDateTime: {
        nullable: false,
        serializedName: "createdDateTime",
        type: {
          name: "String"
        }
      },
      lastUpdatedDateTime: {
        nullable: false,
        serializedName: "lastUpdatedDateTime",
        type: {
          name: "String"
        }
      },
      analyzeResult: {
        serializedName: "analyzeResult",
        type: {
          name: "Composite",
          className: "AnalyzeResults"
        }
      }
    }
  }
};

export const ReadHeaders: msRest.CompositeMapper = {
  serializedName: "read-headers",
  type: {
    name: "Composite",
    className: "ReadHeaders",
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

export const ReadInStreamHeaders: msRest.CompositeMapper = {
  serializedName: "readinstream-headers",
  type: {
    name: "Composite",
    className: "ReadInStreamHeaders",
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
