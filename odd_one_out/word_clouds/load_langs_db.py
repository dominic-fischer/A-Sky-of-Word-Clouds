# change languages json and words final json to something we can use 
import json

practice_dict = {
  "arabic": [
    "AR",
    [
      "afro-asiatic"
    ]
  ],
  "hebrew": [
    "HE",
    [
      "afro-asiatic"
    ]
  ],
  "maltese": [
    "MT",
    [
      "afro-asiatic"
    ]
  ],
  "amharic": [
    "AM",
    [
      "afro-asiatic"
    ]
  ],
  "hausa": [
    "HA",
    [
      "afro-asiatic"
    ]
  ],
  "somali": [
    "SO",
    [
      "afro-asiatic"
    ]
  ],
  "vietnamese": [
    "VI",
    [
      "austroasiatic"
    ]
  ],
  "khmer": [
    "KM",
    [
      "austroasiatic"
    ]
  ],
  "mon": [
    "MNW",
    [
      "austroasiatic"
    ]
  ],
  "indonesian": [
    "ID",
    [
      "austronesian"
    ]
  ],
  "malay": [
    "MS",
    [
      "austronesian"
    ]
  ],
  "tagalog": [
    "TL",
    [
      "austronesian"
    ]
  ],
  "waray-waray": [
    "WAR",
    [
      "austronesian"
    ]
  ],
  "cebuano": [
    "CEB",
    [
      "austronesian"
    ]
  ],
  "minangkabau": [
    "MIN",
    [
      "austronesian"
    ]
  ],
  "basque": [
    "EU",
    [
      "basque"
    ]
  ],
  "tamil": [
    "TA",
    [
      "dravidian"
    ]
  ],
  "malayalam": [
    "ML",
    [
      "dravidian"
    ]
  ],
  "telugu": [
    "TE",
    [
      "dravidian"
    ]
  ],
  "kannada": [
    "KN",
    [
      "dravidian"
    ]
  ],
  "albanian": [
    "SQ",
    [
      "indo-european",
      "albanian"
    ]
  ],
  "armenian": [
    "HY",
    [
      "indo-european",
      "armenian"
    ]
  ],
  "latvian": [
    "LV",
    [
      "indo-european",
      "balto-slavic",
      "baltic"
    ]
  ],
  "lithuanian": [
    "LT",
    [
      "indo-european",
      "balto-slavic",
      "baltic"
    ]
  ],
  "bulgarian": [
    "BG",
    [
      "indo-european",
      "balto-slavic",
      "slavic"
    ]
  ],
  "croatian": [
    "HR",
    [
      "indo-european",
      "balto-slavic",
      "slavic"
    ]
  ],
  "czech": [
    "CS",
    [
      "indo-european",
      "balto-slavic",
      "slavic"
    ]
  ],
  "polish": [
    "PL",
    [
      "indo-european",
      "balto-slavic",
      "slavic"
    ]
  ],
  "russian": [
    "RU",
    [
      "indo-european",
      "balto-slavic",
      "slavic"
    ]
  ],
  "serbian": [
    "SR",
    [
      "indo-european",
      "balto-slavic",
      "slavic"
    ]
  ],
  "slovak": [
    "SK",
    [
      "indo-european",
      "balto-slavic",
      "slavic"
    ]
  ],
  "slovenian": [
    "SL",
    [
      "indo-european",
      "balto-slavic",
      "slavic"
    ]
  ],
  "ukrainian": [
    "UK",
    [
      "indo-european",
      "balto-slavic",
      "slavic"
    ]
  ],
  "macedonian": [
    "MK",
    [
      "indo-european",
      "balto-slavic",
      "slavic"
    ]
  ],
  "belarusian": [
    "BE",
    [
      "indo-european",
      "balto-slavic",
      "slavic"
    ]
  ],
  "irish": [
    "GA",
    [
      "indo-european",
      "celtic"
    ]
  ],
  "welsh": [
    "CY",
    [
      "indo-european",
      "celtic"
    ]
  ],
  "greek": [
    "EL",
    [
      "indo-european",
      "hellenic"
    ]
  ],
  "catalan": [
    "CA",
    [
      "indo-european",
      "italic",
      "romance"
    ]
  ],
  "french": [
    "FR",
    [
      "indo-european",
      "italic",
      "romance"
    ]
  ],
  "galician": [
    "GL",
    [
      "indo-european",
      "italic",
      "romance"
    ]
  ],
  "italian": [
    "IT",
    [
      "indo-european",
      "italic",
      "romance"
    ]
  ],
  "latin": [
    "LA",
    [
      "indo-european",
      "italic",
      "romance"
    ]
  ],
  "portuguese": [
    "PT",
    [
      "indo-european",
      "italic",
      "romance"
    ]
  ],
  "romanian": [
    "RO",
    [
      "indo-european",
      "italic",
      "romance"
    ]
  ],
  "spanish": [
    "ES",
    [
      "indo-european",
      "italic",
      "romance"
    ]
  ],
  "occitan": [
    "OC",
    [
      "indo-european",
      "italic",
      "romance"
    ]
  ],
  "afrikaans": [
    "AF",
    [
      "indo-european",
      "germanic"
    ]
  ],
  "danish": [
    "DA",
    [
      "indo-european",
      "germanic"
    ]
  ],
  "dutch": [
    "NL",
    [
      "indo-european",
      "germanic"
    ]
  ],
  "german": [
    "DE",
    [
      "indo-european",
      "germanic"
    ]
  ],
  "icelandic": [
    "IS",
    [
      "indo-european",
      "germanic"
    ]
  ],
  "norwegian (bokm\u00e5l)": [
    "NO",
    [
      "indo-european",
      "germanic"
    ]
  ],
  "swedish": [
    "SV",
    [
      "indo-european",
      "germanic"
    ]
  ],
  "bengali": [
    "BN",
    [
      "indo-european",
      "indo-iranian"
    ]
  ],
  "hindi": [
    "HI",
    [
      "indo-european",
      "indo-iranian"
    ]
  ],
  "persian": [
    "FA",
    [
      "indo-european",
      "indo-iranian"
    ]
  ],
  "urdu": [
    "UR",
    [
      "indo-european",
      "indo-iranian"
    ]
  ],
  "marathi": [
    "MR",
    [
      "indo-european",
      "indo-iranian"
    ]
  ],
  "punjabi": [
    "PA",
    [
      "indo-european",
      "indo-iranian"
    ]
  ],
  "gujarati": [
    "GU",
    [
      "indo-european",
      "indo-iranian"
    ]
  ],
  "japanese": [
    "JA",
    [
      "japonic"
    ]
  ],
  "georgian": [
    "KA",
    [
      "kartvelian"
    ]
  ],
  "korean": [
    "KO",
    [
      "koreanic"
    ]
  ],
  "thai": [
    "TH",
    [
      "Kra-Dai"
    ]
  ],
  "swahili": [
    "SW",
    [
      "niger-congo",
      "atlantic-congo",
      "benue-congo",
      "bantu"
    ]
  ],
  "shona": [
    "SN",
    [
      "niger-congo",
      "atlantic-congo",
      "benue-congo",
      "bantu"
    ]
  ],
  "chichewa": [
    "NY",
    [
      "niger-congo",
      "atlantic-congo",
      "benue-congo",
      "bantu"
    ]
  ],
  "zulu": [
    "ZU",
    [
      "niger-congo",
      "atlantic-congo",
      "benue-congo",
      "bantu"
    ]
  ],
  "xhosa": [
    "XH",
    [
      "niger-congo",
      "atlantic-congo",
      "benue-congo",
      "bantu"
    ]
  ],
  "chinese": [
    "ZH",
    [
      "sino-tibetan"
    ]
  ],
  "tibetan": [
    "BO",
    [
      "sino-tibetan"
    ]
  ],
  "newar / nepal bhasa": [
    "NEW",
    [
      "sino-tibetan"
    ]
  ],
  "azerbaijani": [
    "AZ",
    [
      "turkic"
    ]
  ],
  "kazakh": [
    "KK",
    [
      "turkic"
    ]
  ],
  "turkish": [
    "TR",
    [
      "turkic"
    ]
  ],
  "uzbek": [
    "ZU",
    [
      "turkic"
    ]
  ],
  "tatar": [
    "TT",
    [
      "turkic"
    ]
  ],
  "estonian": [
    "ET",
    [
      "uralic",
      "finno-ugric"
    ]
  ],
  "finnish": [
    "FI",
    [
      "uralic",
      "finno-ugric"
    ]
  ],
  "hungarian": [
    "HU",
    [
      "uralic",
      "finno-ugric"
    ]
  ]
}

compatible_dict = {}
with open("all_languages.json", "w") as outfile:
    outfile.write("[")
    counter = 0
    for item in practice_dict.items():
        
        compatible_dict["model"] = "word_clouds.language"
        field_dict = {}
        field_dict["lang_identifier"] = item[1][0]
        field_dict["lang_name"] = item[0]
        field_dict["proto_lang_fam"] = item[1][1][0]
        field_dict["lang_fam"] = item[1][1][-1]
        compatible_dict["fields"] = field_dict
        json_object = json.dumps(compatible_dict)
        if counter == 0:
            outfile.write(json_object)
        else:
            outfile.write(", \n" + json_object)
        counter += 1
    outfile.write("]")

"""
for term in compatible_dict.items():
    json_object = json.dumps(term)
    print(json_object)
"""


