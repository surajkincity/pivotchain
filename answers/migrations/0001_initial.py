# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import datetime


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='blog',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=5000)),
                ('body', models.TextField()),
                ('date', models.DateField(default=datetime.datetime.now, blank=True)),
                ('name', models.CharField(max_length=5000)),
            ],
        ),
        migrations.CreateModel(
            name='comment',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=5000)),
                ('blog', models.CharField(max_length=5000, null=True, blank=True)),
                ('comment', models.TextField()),
                ('date', models.DateField(default=datetime.datetime.now, blank=True)),
            ],
        ),
    ]
