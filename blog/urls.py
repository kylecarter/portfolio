from django.conf.urls import include, url
from .views import DocsList, DocsPost

urlpatterns = [
    url(r'^$', DocsList),
    url(r'docs/(?P<slug>[a-zA-Z0-9\-_]+)/$', DocsPost)
]
