
"""
import django, os, sys

sys.path.append("odd_one_out")

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "odd_one_out.settings")

django.setup()

from models import Language, Words


def get_random_languages():
    families = (
        Language.objects.values_list("lang_fam", flat=True).distinct().order_by("?")[:2]
    )
    languages = Language.objects.filter(family=families[0]).order_by("?")[:3]
    print(families, languages)
    return languages

    # all 1 lang words to 1 list

    # all 4 list to context


get_random_languages()


def get_random_words():

    pass


# notes:
# first get random language family
# main_family = Language.object.random() #TODO: whatever the proper logic is when we select from *families*
# main_family = random.choice(Language) # https://datagy.io/python-random-element-from-list/#:~:text=The%20simplest%20way%20to%20use%20Python%20to%20select,list%2C%20though%20we%20could%20also%20use%20a%20tuple.

# maybe it'd be smarter to select one random language, check if there are three others
# if yes, it's the main language, if no, it's the odd language
# and then do a while loop or something iterating over it

# can we do the following:
# main_family = Language.object.all.random()

# https://stackoverflow.com/questions/54159626/how-can-i-select-a-random-object-from-a-class
# TODO: check if this works

# https://www.autoscripts.net/django-iterate-over-all-objects/
# TODO: check if this works

# odd_family = Language.object.random()
# if main_family == odd_family:
# odd_family == Language.object.random()
# TODO: either put this in a while loop or decide to just use Albanian

# then get random 3 languages + random 1 new language
# it's possible that we already have the four languages, depending on how easily implemented the above part is

# then get random words that are all the same in the 4 languages
# TODO: define how many words we want to use for the clouds. I will work with four, but i think it'd be better to define sth where the user decides.
# word1 = Words.object.random()
# word2 = Words.object.random()
# word3 = Words.object.random()
# word4 = Words.object.random()
"""