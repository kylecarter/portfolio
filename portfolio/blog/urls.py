from django.conf.urls import include, url
from . import views

urlpatterns = [
    url(r'^$', views.post_list, name='post_list'),
    url(r'blog/(?P<slug>[a-zA-Z0-9\-_]+)/$'), views.post_detail, name='post_detail')
]