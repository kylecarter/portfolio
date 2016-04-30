from django.conf.urls import patterns, include, url
from django.contrib import admin

from rest_framework import routers

from .views import JobViewSet, DegreeViewSet, ContactViewSet, AwardViewSet, ProjectViewSet, SkillViewSet, EducationViewSet, ProjectURLViewSet, EmploymentView


router = routers.DefaultRouter()
router.register(r'jobs', JobViewSet)
router.register(r'degrees', DegreeViewSet)
router.register(r'contacts', ContactViewSet)
router.register(r'awards', AwardViewSet)
router.register(r'projects', ProjectViewSet)
router.register(r'skills', SkillViewSet)
router.register(r'schools', EducationViewSet)
router.register(r'links', ProjectURLViewSet)


urlpatterns = [
  url(r'^', include(router.urls)),
  url(r'^employment/$', EmploymentView.as_view()),
]