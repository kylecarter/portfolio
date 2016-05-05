from .models import Job, Degree, Contact, Award, Project, Skill, Education, ProjectURL
from rest_framework import serializers

class JobSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Job
        fields = ('id', 'org', 'city', 'state', 'title', 'description', 'start_date', 'end_date', 'skills')


class DegreeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Degree
        fields = ('id', 'degree', 'school')


class ContactSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Contact
        fields = ('id', 'address', 'address2', 'city', 'state', 'zipcode', 'phone', 'email')


class AwardSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Award
        fields = ('id', 'presented')


class ProjectSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'name', 'description', 'skills', 'img')


class SkillSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Skill
        fields = ('id', 'label')


class EducationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Education
        fields = ('id', 'school', 'city', 'state', 'grad_date')


class ProjectURLSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ProjectURL
        fields = ('id', 'link', 'project')


