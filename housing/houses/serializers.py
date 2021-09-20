from django.db.models import fields
from rest_framework import serializers
from houses.models import House

# House Serializer
class HouseSerializer(serializers.ModelSerializer):
    class Meta:
        model = House
        fields = '__all__'