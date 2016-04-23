# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-04-23 20:58
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_project'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProjectURL',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('link', models.URLField(max_length=1000)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Project')),
            ],
        ),
    ]
