from rest_framework import serializers
from .models import *


class OppurtunitiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Oppurtunities
        fields = '__all__'

        def create(self, validated_data):
            return Oppurtunities.objects.create(**validated_data)


class ProjectsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projects
        fields = '__all__'

        def create(self, validated_data):
            return Projects.objects.create(**validated_data)
        

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'

        def create(self, validated_data):
            return Users.objects.create(**validated_data)