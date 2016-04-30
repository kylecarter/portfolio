from django.http import *
from django.shortcuts import render_to_response, redirect, render, get_object_or_404
from django.views.generic import TemplateView

from rest_framework import viewsets, mixins, generics
from rest_framework.permissions import IsAdminUser
from rest_framework.exceptions import APIException
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Post

from .serializers import PostSerializer


class DocsList(TemplateView):
	template_name = 'blog/index.html'


class DocsPost(TemplateView):
    template_name = 'blog/blog.html'


class ForbiddenAccess(APIException):
    status_code = 403
    default_detail = 'Action Forbidden'


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


