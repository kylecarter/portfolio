from django.contrib import admin
from .models import Job, Skill, Education, Degree, Contact, Award, Project, ProjectURL


class JobAdmin(admin.ModelAdmin):
    list_display = ['org', 'state', 'title']


class SkillAdmin(admin.ModelAdmin):
	list_display = ['label']


class EducationAdmin(admin.ModelAdmin):
	list_display = ['school']


class DegreeAdmin(admin.ModelAdmin):
	list_display = ['degree', 'school']


class ContactAdmin(admin.ModelAdmin):
	list_display = ['address', 'phone', 'email']


class AwardAdmin(admin.ModelAdmin):
	list_display = ['presented']


class ProjectURLInline(admin.StackedInline):
	model = ProjectURL


	def get_extra(self, request, obj=None, **kwargs):
		extra = 1
		return extra


class ProjectAdmin(admin.ModelAdmin):
	list_display = ['name']
	inlines = [ProjectURLInline]


admin.site.register(Job,JobAdmin)
admin.site.register(Skill,SkillAdmin)
admin.site.register(Education,EducationAdmin)
admin.site.register(Degree,DegreeAdmin)
admin.site.register(Contact,ContactAdmin)
admin.site.register(Award,AwardAdmin)
admin.site.register(Project,ProjectAdmin)
