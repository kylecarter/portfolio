from django.http import *
from django.shortcuts import render_to_response,redirect, render, get_object_or_404
from django.views.generic import TemplateView

# Create your views here.
class DocsList(TemplateView):
	template_name = 'blog/index.html'

class DocsPost(TemplateView):
    template_name = 'blog/blog.html'
