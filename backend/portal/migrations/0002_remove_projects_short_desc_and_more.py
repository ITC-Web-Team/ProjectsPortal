# Generated by Django 5.1.1 on 2024-10-19 11:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portal', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='projects',
            name='short_desc',
        ),
        migrations.RemoveField(
            model_name='users',
            name='projects_collab',
        ),
        migrations.AddField(
            model_name='users',
            name='degree',
            field=models.CharField(choices=[(0, 'B.Tech.'), (1, 'M.Tech.')], default='B.Tech.', max_length=10),
        ),
        migrations.AddField(
            model_name='users',
            name='dept',
            field=models.TextField(default=None),
        ),
        migrations.AddField(
            model_name='users',
            name='pic',
            field=models.ImageField(default=None, upload_to=''),
        ),
        migrations.AddField(
            model_name='users',
            name='rollno',
            field=models.TextField(default=None),
        ),
    ]