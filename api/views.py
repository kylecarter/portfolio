from django.http import *
from django.shortcuts import render_to_response, redirect, render, get_object_or_404
from django.views.generic import TemplateView

from rest_framework import viewsets, mixins, generics
from rest_framework.permissions import IsAdminUser
from rest_framework.exceptions import APIException
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Job, Degree, Contact, Award, Project, Skill, Education, ProjectURL

from .serializers import JobSerializer, DegreeSerializer, ContactSerializer, AwardSerializer, ProjectSerializer, SkillSerializer, EducationSerializer, ProjectURLSerializer


class ForbiddenAccess(APIException):
    status_code = 403
    default_detail = 'Action Forbidden'


class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.all()
    serializer_class = JobSerializer


class DegreeViewSet(viewsets.ModelViewSet):
    queryset = Degree.objects.all()
    serializer_class = DegreeSerializer


class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer


class AwardViewSet(viewsets.ModelViewSet):
    queryset = Award.objects.all()
    serializer_class = AwardSerializer


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer


class EducationViewSet(viewsets.ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer


class ProjectURLViewSet(viewsets.ModelViewSet):
    queryset = ProjectURL.objects.all()
    serializer_class = ProjectURLSerializer


class EmploymentView(mixins.ListModelMixin, generics.GenericAPIView):
    queryset = Job.objects.all().order_by('-start_date')
    serializer_class = JobSerializer


    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

