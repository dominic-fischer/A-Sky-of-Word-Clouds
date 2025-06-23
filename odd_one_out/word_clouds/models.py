from django.db import models
from Levenshtein import distance as lev

# Create your models here.

class Language(models.Model):

    #def __str__(self):
     #   return self.language_name

    lang_identifier = models.CharField(max_length=3, default="NA", primary_key=True)
    lang_name = models.CharField(max_length=20, default="NA")
    proto_lang_fam = models.CharField(max_length=20, default="NA")
    lang_fam = models.CharField(max_length=20, default="NA")

    def __str__(self):
      return self.lang_identifier
    

class Words(models.Model):

    word = models.CharField(default="default_word", max_length=30, primary_key=True) # not changing! better not risk database problems

    def __str__(self):
        return self.word

    # belongs_to = models.ForeignKey(Language, on_delete=models.CASCADE)
    AR = models.CharField(default="None", max_length=25)
    HE = models.CharField(default="None", max_length=25)
    MT = models.CharField(default="None", max_length=25)
    AM = models.CharField(default="None", max_length=25)
    HA = models.CharField(default="None", max_length=25)
    SO = models.CharField(default="None", max_length=25)
    VI = models.CharField(default="None", max_length=25)
    KM = models.CharField(default="None", max_length=25)
    MNW = models.CharField(default="None", max_length=25)
    ID = models.CharField(default="None", max_length=25)
    MS = models.CharField(default="None", max_length=25)
    TL = models.CharField(default="None", max_length=25)
    WAR = models.CharField(default="None", max_length=25)
    CEB = models.CharField(default="None", max_length=25)
    MIN = models.CharField(default="None", max_length=25)
    EU = models.CharField(default="None", max_length=25)
    TA = models.CharField(default="None", max_length=25)
    ML = models.CharField(default="None", max_length=25)
    TE = models.CharField(default="None", max_length=25)
    KN = models.CharField(default="None", max_length=25)
    SQ = models.CharField(default="None", max_length=25)
    HY = models.CharField(default="None", max_length=25)
    LV = models.CharField(default="None", max_length=25)
    LT = models.CharField(default="None", max_length=25)
    BG = models.CharField(default="None", max_length=25)
    HR = models.CharField(default="None", max_length=25)
    CS = models.CharField(default="None", max_length=25)
    PL = models.CharField(default="None", max_length=25)
    RU = models.CharField(default="None", max_length=25)
    SR = models.CharField(default="None", max_length=25)
    SK = models.CharField(default="None", max_length=25)
    SL = models.CharField(default="None", max_length=25)
    UK = models.CharField(default="None", max_length=25)
    MK = models.CharField(default="None", max_length=25)
    BE = models.CharField(default="None", max_length=25)
    GA = models.CharField(default="None", max_length=25)
    CY = models.CharField(default="None", max_length=25)
    EL = models.CharField(default="None", max_length=25)
    CA = models.CharField(default="None", max_length=25)
    FR = models.CharField(default="None", max_length=25)
    GL = models.CharField(default="None", max_length=25)
    IT = models.CharField(default="None", max_length=25)
    LA = models.CharField(default="None", max_length=25)
    PT = models.CharField(default="None", max_length=25)
    RO = models.CharField(default="None", max_length=25)
    ES = models.CharField(default="None", max_length=25)
    OC = models.CharField(default="None", max_length=25)
    AF = models.CharField(default="None", max_length=25)
    DA = models.CharField(default="None", max_length=25)
    NL = models.CharField(default="None", max_length=25)
    DE = models.CharField(default="None", max_length=25)
    IS = models.CharField(default="None", max_length=25)
    NO = models.CharField(default="None", max_length=25)
    SV = models.CharField(default="None", max_length=25)
    BN = models.CharField(default="None", max_length=25)
    HI = models.CharField(default="None", max_length=25)
    FA = models.CharField(default="None", max_length=25)
    UR = models.CharField(default="None", max_length=25)
    MR = models.CharField(default="None", max_length=25)
    PA = models.CharField(default="None", max_length=25)
    GU = models.CharField(default="None", max_length=25)
    JA = models.CharField(default="None", max_length=25)
    KA = models.CharField(default="None", max_length=25)
    KO = models.CharField(default="None", max_length=25)
    TH = models.CharField(default="None", max_length=25)
    SW = models.CharField(default="None", max_length=25)
    SN = models.CharField(default="None", max_length=25)
    NY = models.CharField(default="None", max_length=25)
    ZU = models.CharField(default="None", max_length=25)
    XH = models.CharField(default="None", max_length=25)
    ZH = models.CharField(default="None", max_length=25)
    BO = models.CharField(default="None", max_length=25)
    NEW = models.CharField(default="None", max_length=25)
    AZ = models.CharField(default="None", max_length=25)
    KK = models.CharField(default="None", max_length=25)
    TR = models.CharField(default="None", max_length=25)
    ZU = models.CharField(default="None", max_length=25)
    TT = models.CharField(default="None", max_length=25)
    ET = models.CharField(default="None", max_length=25)
    FI = models.CharField(default="None", max_length=25)
    HU = models.CharField(default="None", max_length=25)



