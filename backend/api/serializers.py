#backend/post/serializers.py
from rest_framework import serializers
from .models import Item, Portfolio

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id','name','price','photo','status')
        model = Item

class PortfolioSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id','name','photo','size', 'year')
        model = Portfolio
