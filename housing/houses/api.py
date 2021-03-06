from houses.models import House
from rest_framework import viewsets, permissions
from .serializers import HouseSerializer

#House Viewset
class HouseViewSet(viewsets.ModelViewSet):
    queryset = House.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = HouseSerializer