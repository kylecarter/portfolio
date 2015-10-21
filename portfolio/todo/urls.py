from django.conf.urls import include, url
from . import views

urlpatterns = [
    url(r'^$', views.todos_list, name='todos_list')
]