# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='contact',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('email', models.CharField(max_length=5000)),
                ('name', models.CharField(max_length=5000)),
                ('message', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='leads',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('website', models.CharField(max_length=5000)),
                ('email', models.CharField(max_length=5000)),
            ],
        ),
        migrations.CreateModel(
            name='newsletter',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('email', models.CharField(max_length=5000)),
            ],
        ),
    ]
