from django.db import models
from django.utils import timezone
from django.template.defaultfilters import slugify

from djrichtextfield.models import RichTextField


class Post(models.Model):
    title = models.CharField(max_length=200)
    text = RichTextField()
    created = models.DateTimeField(auto_now=False, auto_now_add=True)
    last_updated = models.DateTimeField(auto_now=True, auto_now_add=False)
    slug = models.SlugField(unique=True, blank=True)
    description = models.TextField(blank=True)


    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super(Post, self).save(*args, **kwargs)


    def __unicode__(self):
        return u'%s' % (self.title)


    def __str__(self):
        return self.title

