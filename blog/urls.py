from django.conf.urls import include, url
from .views import view_doc

urlpatterns = [
    # url(r'^$', DocsList.as_view()),
    url(r'^(?P<slug>[a-zA-Z0-9\-_]+)/*$', view_doc, name="doc_post"),
]
