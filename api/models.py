from __future__ import unicode_literals
from django.db import models


class Skill(models.Model):
	label = models.CharField(max_length=500)


	def __unicode__(self):
		return u'%s' % (self.label)


	def __str__(self):
		return self.label


class Job(models.Model):
	org = models.CharField(max_length=500)
	city = models.CharField(max_length=500)
	state = models.CharField(max_length=500)
	title = models.CharField(max_length=500)
	description = models.TextField()
	start_date = models.DateField(auto_now=False, auto_now_add=False)
	end_date = models.DateField(auto_now=False, auto_now_add=False, blank=True, null=True)
	skills = models.ManyToManyField(Skill)


	def __unicode__(self):
		return u'%s' % (self.org)


	def __str__(self):
		return self.org


class Education(models.Model):
	school = models.CharField(max_length=500)
	city = models.CharField(max_length=500)
	state = models.CharField(max_length=500)
	grad_date = models.DateField(auto_now=False, auto_now_add=False)


	def __unicode__(self):
		return u'%s' % (self.school)


	def __str__(self):
		return self.school


class Degree(models.Model):
	degree = models.CharField(max_length=500)
	school = models.ForeignKey(Education)


	def __unicode__(self):
		return u'%s' % (self.degree)


	def __str__(self):
		return self.degree


class Contact(models.Model):
	address = models.CharField(max_length=500)
	address2 = models.CharField(max_length=500)
	city = models.CharField(max_length=500)
	state = models.CharField(max_length=500)
	zipcode = models.CharField(max_length=500)
	phone = models.CharField(max_length=500)
	email = models.EmailField(max_length=254)


	def __unicode__(self):
		return u'%s %s, %s %s' % (self.address, self.city, self.state, self.zipcode)


	def __str__(self):
		return self.address


class Award(models.Model):
	presented = models.CharField(max_length=500)
	

	def __unicode__(self):
		return u'%s' % (self.presented)


	def __str__(self):
		return self.presented


class Project(models.Model):
	name = models.CharField(max_length=500)
	description = models.TextField()
	skills = models.ManyToManyField(Skill)
	img = models.CharField(max_length=500, blank=True)


	def __unicode__(self):
		return u'%s' % (self.name)


	def __str__(self):
		return self.name


class ProjectURL(models.Model):
	link = models.URLField(max_length=1000)
	project = models.ForeignKey(Project, on_delete=models.CASCADE)
	
	
	def __unicode__(self):
		return u'%s' % (self.link)


	def __str__(self):
		return self.link

