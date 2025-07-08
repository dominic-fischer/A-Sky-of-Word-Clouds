from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),            # /word_clouds/
    path('clouds', views.clouds, name='clouds'),    # /word_clouds/clouds
]

