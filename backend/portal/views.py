from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import *
from .serializers import *

# view oppurtunities list
@api_view(['GET'])
def view_oppurtunities_list(request):
    oppurtunities=Oppurtunities.objects.all()
    data=OppurtunitiesSerializer(oppurtunities, many=True).data
    return Response(data=data)

# view specific oppurtunity
@api_view(['GET'])
def view_oppurtunity(request, id):
    try:
        oppurtunity=Oppurtunities.objects.get(id=id)
    except Oppurtunities.DoesNotExist:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    data=OppurtunitiesSerializer(oppurtunity).data
    return Response(data=data)

# view projects list
@api_view(['GET'])
def view_projects_list(request):
    projects=Projects.objects.all()
    data=ProjectsSerializer(projects, many=True).data
    return Response(data=data)

# view specific project
@api_view(['GET'])
def view_project(request, id):
    try:
        project=Projects.objects.get(id=id)
    except Projects.DoesNotExist:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    data=ProjectsSerializer(project).data
    return Response(data=data)

# add project
@api_view(['POST'])
def create_project(request):
    serializer=ProjectsSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# add oppurtunity
@api_view(['POST'])
def create_oppurtunity(request):
    serializer=OppurtunitiesSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
