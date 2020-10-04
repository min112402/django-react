#backend/post/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('item', views.ItemList.as_view()),
    path('item/<int:pk>', views.ItemDetail.as_view()),
    path('portfolio', views.PortfolioList.as_view()),
    path('portfolio/<int:pk>', views.PortfolioDetail.as_view()),
]
