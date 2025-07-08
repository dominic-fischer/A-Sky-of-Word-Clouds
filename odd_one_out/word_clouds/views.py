from django.shortcuts import render
from django.http import HttpResponse, Http404
from django.template import loader

from .models import Words, Language

import random, time, logging

# Create your views here.


def index(request):
    return render(request, "word_clouds/index.html")


def clouds(request):  # add word later

    try:
        game_mode = request.GET["preferred_mode"]
    except:
        return HttpResponse(
            "Whoops! Something went wrong trying to set the game mode..."
        )

    try:
        difficulty = request.GET["difficulty"]
    except:
        return HttpResponse(
            "Whoops! Something went wrong trying to set the difficulty..."
        )

    # language_families = ["afro-asiatic", "austroasiatic", "austronesian", "basque", "dravidian", "albanian", "armenian", "baltic", "slavic", "celtic", "hellenic",
    # "romance", "germanic", "indo-iranian", "japonic", "kartvelian", "koreanic", "Kra-Dai", "turkic", "sino-tibetan", "bantu", "finno-ugric"]  # check that list is complete
    # language_families = ["germanic", "romance"] # these are for tryout-purposes because we can understand them

    # code should work even when changing the database and adding more languages
    MAX_LANGUAGE_ATTEMPTS = 10
    MAX_WORD_ATTEMPTS = 100

    n = 4  # number of words you want in the cloud

    success = False

    for language_attempt in range(MAX_LANGUAGE_ATTEMPTS):
        # Choose two random, different families with enough languages
        all_families = list(
            Language.objects.values_list("lang_fam", flat=True).distinct()
        )
        if len(all_families) < 2:
            return HttpResponse("Not enough language families in the database!")

        main_family, odd_family = random.sample(all_families, 2)
        main_langs = list(Language.objects.filter(lang_fam=main_family))
        odd_langs = list(Language.objects.filter(lang_fam=odd_family))
        if len(main_langs) < 3 or len(odd_langs) < 1:
            continue

        # Pick 3 unique from main, 1 from odd
        main_selected = random.sample(main_langs, 3)
        odd_selected = random.choice(odd_langs)
        all_langs = main_selected + [odd_selected]
        lang_codes = [l.lang_identifier for l in all_langs]
        lang_codes_custom = [l.lang_name for l in all_langs]

        # Now try to find n words present in ALL those languages
        valid_word_objs = []
        for word_obj in Words.objects.all():
            if all(
                getattr(word_obj, code, None) and str(getattr(word_obj, code)).strip()
                for code in lang_codes
            ):
                valid_word_objs.append(word_obj)

        if len(valid_word_objs) < n:
            continue  # try next language combo

        chosen_word_objs = random.sample(valid_word_objs, n)
        random_main_words = []
        random_main_words_custom = []
        for word_obj in chosen_word_objs:
            words_per_lang = [str(getattr(word_obj, code)) for code in lang_codes]
            random_main_words.append((word_obj, words_per_lang))
            random_main_words_custom.append((word_obj.word, words_per_lang))
        success = True
        break

    if not success:
        return HttpResponse(
            "No valid combination of languages and words found. Try reloading or check your data!"
        )

    # Define odd_words and odd_lang for use in the context
    odd_words = [words_per_lang[3] for _, words_per_lang in random_main_words]
    odd_lang = odd_selected

    access_list = ["1", "2", "3", "4"]
    shuffled_list = random.sample(access_list, len(access_list))
    a = shuffled_list[0]
    b = shuffled_list[1]
    c = shuffled_list[2]
    d = shuffled_list[3]

    if difficulty == "easy":

        if game_mode == "mode1":

            context = {
                # lang1, families[0]),
                f"word1{a}": (random_main_words[0][1][0]),
                # 'word11': (requested_words_ls),
                # lang2, families[0]),
                f"word1{b}": (random_main_words[0][1][1]),
                # 'word12': families,
                # 'word12': (choice_1, choice_2),
                # lang3, families[0]),
                f"word1{c}": (random_main_words[0][1][2]),
                # 'word13': (languages, "should be part of ", choice_1), # seems to work now
                # lang4, families[1]),
                f"word1{d}": (random_main_words[0][1][3]),
                # 'word14': (odd_lang, "should be part of ", choice_2), # seems to work now
                # lang1, families[0]),
                f"word2{a}": (random_main_words[1][1][0]),
                # lang2, families[0]),
                f"word2{b}": (random_main_words[1][1][1]),
                # lang3, families[0]),
                f"word2{c}": (random_main_words[1][1][2]),
                # lang4, families[1]),
                f"word2{d}": (random_main_words[1][1][3]),
                # lang1, families[0]),
                f"word3{a}": (random_main_words[2][1][0]),
                # lang2, families[0]),
                f"word3{b}": (random_main_words[2][1][1]),
                # lang3, families[0]),
                f"word3{c}": (random_main_words[2][1][2]),
                # lang4, families[1]),
                f"word3{d}": (random_main_words[2][1][3]),
                # lang1, families[0]),
                f"word4{a}": (random_main_words[3][1][0]),
                # lang2, families[0]),
                f"word4{b}": (random_main_words[3][1][1]),
                # lang3, families[0]),
                f"word4{c}": (random_main_words[3][1][2]),
                # lang4, families[1]),
                f"word4{d}": (random_main_words[3][1][3]),
            }

        elif game_mode == "mode2":
            # TODO: THIS IS DIFFERENT!!! NO COPY PASTING HERE!!!
            context = {
                # lang1, families[0]),
                f"word{a}1": (random_main_words[0][1][0]),
                # 'word11': (requested_words_ls),
                # lang2, families[0]),
                f"word{b}1": (random_main_words[0][1][1]),
                # 'word12': families,
                # 'word12': (choice_1, choice_2),
                # lang3, families[0]),
                f"word{c}1": (random_main_words[0][1][2]),
                # 'word13': (languages, "should be part of ", choice_1), # seems to work now
                # lang4, families[1]),
                f"word{d}1": (random_main_words[0][1][3]),
                # 'word14': (odd_lang, "should be part of ", choice_2), # seems to work now
                # lang1, families[0]),
                f"word{a}2": (random_main_words[1][1][0]),
                # lang2, families[0]),
                f"word{b}2": (random_main_words[1][1][1]),
                # lang3, families[0]),
                f"word{c}2": (random_main_words[1][1][2]),
                # lang4, families[1]),
                f"word{d}2": (random_main_words[1][1][3]),
                # lang1, families[0]),
                f"word{a}3": (random_main_words[2][1][0]),
                # lang2, families[0]),
                f"word{b}3": (random_main_words[2][1][1]),
                # lang3, families[0]),
                f"word{c}3": (random_main_words[2][1][2]),
                # lang4, families[1]),
                f"word{d}3": (random_main_words[2][1][3]),
                # lang1, families[0]),
                f"word{a}4": (random_main_words[3][1][0]),
                # lang2, families[0]),
                f"word{b}4": (random_main_words[3][1][1]),
                # lang3, families[0]),
                f"word{c}4": (random_main_words[3][1][2]),
                # lang4, families[1]),
                f"word{d}4": (random_main_words[3][1][3]),
            }

    elif difficulty == "hard":
        # shuffling is already implemented
        # maybe implement the same color randomization thingy as above here aswell

        index_list = [0, 1, 2, 3]
        shuffled_1 = random.sample(index_list, len(index_list))
        shuffled_2 = random.sample(index_list, len(index_list))
        shuffled_3 = random.sample(index_list, len(index_list))
        shuffled_4 = random.sample(index_list, len(index_list))
        if game_mode == "mode1":

            context = {
                f"word1{a}": (random_main_words[0][1][shuffled_1[0]]),
                # 'word11': (requested_words_ls),
                f"word1{b}": (random_main_words[0][1][shuffled_1[1]]),
                # 'word12': families,
                # 'word12': (choice_1, choice_2),
                f"word1{c}": (random_main_words[0][1][shuffled_1[2]]),
                # 'word13': (languages, "should be part of ", choice_1), # seems to work now
                f"word1{d}": (random_main_words[0][1][shuffled_1[3]]),
                # 'word14': (odd_lang, "should be part of ", choice_2), # seems to work now
                f"word2{a}": (random_main_words[1][1][shuffled_2[0]]),
                f"word2{b}": (random_main_words[1][1][shuffled_2[1]]),
                f"word2{c}": (random_main_words[1][1][shuffled_2[2]]),
                f"word2{d}": (random_main_words[1][1][shuffled_2[3]]),
                f"word3{a}": (random_main_words[2][1][shuffled_3[0]]),
                f"word3{b}": (random_main_words[2][1][shuffled_3[1]]),
                f"word3{c}": (random_main_words[2][1][shuffled_3[2]]),
                f"word3{d}": (random_main_words[2][1][shuffled_3[3]]),
                f"word4{a}": (random_main_words[3][1][shuffled_4[0]]),
                f"word4{b}": (random_main_words[3][1][shuffled_4[1]]),
                f"word4{c}": (random_main_words[3][1][shuffled_4[2]]),
                f"word4{d}": (random_main_words[3][1][shuffled_4[3]]),
            }

        elif game_mode == "mode2":

            context = {
                # lang1, families[0]),
                f"word{a}1": (random_main_words[shuffled_1[0]][1][0]),
                # 'word11': (requested_words_ls),
                # lang2, families[0]),
                f"word{b}1": (random_main_words[shuffled_2[0]][1][1]),
                # 'word12': families,
                # 'word12': (choice_1, choice_2),
                # lang3, families[0]),
                f"word{c}1": (random_main_words[shuffled_3[0]][1][2]),
                # 'word13': (languages, "should be part of ", choice_1), # seems to work now
                # lang4, families[1]),
                f"word{d}1": (random_main_words[shuffled_4[0]][1][3]),
                # 'word14': (odd_lang, "should be part of ", choice_2), # seems to work now
                # lang1, families[0]),
                f"word{a}2": (random_main_words[shuffled_1[1]][1][0]),
                # lang2, families[0]),
                f"word{b}2": (random_main_words[shuffled_2[1]][1][1]),
                # lang3, families[0]),
                f"word{c}2": (random_main_words[shuffled_3[1]][1][2]),
                # lang4, families[1]),
                f"word{d}2": (random_main_words[shuffled_4[1]][1][3]),
                # lang1, families[0]),
                f"word{a}3": (random_main_words[shuffled_1[2]][1][0]),
                # lang2, families[0]),
                f"word{b}3": (random_main_words[shuffled_2[2]][1][1]),
                # lang3, families[0]),
                f"word{c}3": (random_main_words[shuffled_3[2]][1][2]),
                # lang4, families[1]),
                f"word{d}3": (random_main_words[shuffled_4[2]][1][3]),
                # lang1, families[0]),
                f"word{a}4": (random_main_words[shuffled_1[3]][1][0]),
                # lang2, families[0]),
                f"word{b}4": (random_main_words[shuffled_2[3]][1][1]),
                # lang3, families[0]),
                f"word{c}4": (random_main_words[shuffled_3[3]][1][2]),
                # lang4, families[1]),
                f"word{d}4": (random_main_words[shuffled_4[3]][1][3]),
            }

    # for loop for all the weights and adding them into the context
    weight_ls = [f"w{number}" for number in range(16)]
    for weight in weight_ls:
        context[weight] = random.randint(2, 8)

    # get the odd words in there
    for i, word in enumerate(odd_words):
        i += 1
        context[f"odd_word{i}"] = word

    # and the odd lang
    context["odd_lang"] = odd_lang
    context["odd_family"] = odd_family
    context["main_family"] = main_family
    context["all_langs"] = all_families
    context["words"] = random_main_words_custom
    context["lang_codes_custom"] = lang_codes_custom
    context["odd_words"] = odd_words
    

    odd_cloud_number = d
    context["odd_cloud_number"] = odd_cloud_number

    context["mode"] = game_mode
    context["difficulty"] = difficulty

    # context["btw"] = main_words

    return render(request, "word_clouds/word_clouds.html", context)


# TODO: read more on ajax to change this stuff
# def check_solutions(request):
#  marked_words = request.GET.get('')
