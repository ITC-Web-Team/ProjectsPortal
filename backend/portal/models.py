from django.db import models

choices = ((1, '1st'), (2, '2nd'), (3, '3rd'), (4, '4th'), (5, '5th'))
choices1=((0,'B.Tech.'),(1,'M.Tech.'))

class Oppurtunities(models.Model):
    title=models.TextField(default=None)
    poster=models.ImageField(null=True)
    short_desc=models.TextField(default=None)
    domains=models.TextField(default=None)
    description=models.TextField(default=None)
    roles=models.TextField(default=None)
    stipend=models.TextField(default=None)
    duration=models.TextField(default=None)
    tasks=models.TextField(default=None)
    skills_gained=models.TextField(default=None)
    req_quali=models.TextField(default=None)
    gform=models.URLField(default=None)
    deadline=models.TextField(default=None)
    contact_info=models.TextField(default=None)
    
class Projects(models.Model):
    id = models.UUIDField(primary_key= True)
    title=models.TextField(default=None)
    poster=models.ImageField(default=None)
    program=models.TextField(default=None, null=True)
    club=models.TextField(default=None)
    markdown=models.TextField(default=None)
    

class Users(models.Model):
    name=models.TextField(default=None)
    rollno=models.TextField(default=None)
    yr_of_study=models.CharField(max_length=3, choices=choices, default='1st')
    dept=models.TextField(default=None)
    degree=models.CharField(max_length=10, choices=choices1, default='B.Tech.')
    pic=models.ImageField(default=None)
    collab=models.BooleanField(default=False)
 


    






    
