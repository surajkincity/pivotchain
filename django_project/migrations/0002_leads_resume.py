# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('django_project', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='leads',
            name='resume',
            field=models.FileField(default='null', upload_to=b''),
            preserve_default=False,
        ),
    ]
