# Create your models here.
from django.db import models
import datetime

YEARS = []
for r in range(1980, (datetime.datetime.now().year+1)):
    YEARS.append((r,r))

SIZES = [('A1','A1'),('A2','A2'),('A3','A3'),('A4','A4')]
# Create your models here.

class Item(models.Model):
    name = models.CharField(max_length=50)
    price = models.IntegerField()
    photo = models.ImageField(blank=True, upload_to = "media/item_photos")
    STATUS = [('Sold Out','Sold Out'), ('Available','Available')]

    status = models.CharField(
        max_length = 10,
        choices=STATUS,
        default= 'Available',
        help_text='Availability',
    )

    class Meta:
        ordering = ['price']

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        """Returns the url to access a particular author instance."""
        return reverse('item-detail', args=[str(self.id)])

class Portfolio(models.Model):
    name = models.CharField(max_length=50)
    size = models.CharField(max_length=10,choices=SIZES)
    year = models.IntegerField(choices=YEARS, default=1980) #걍긁어옴
    photo = models.ImageField(blank=True, upload_to = "media/portfolio_photos")

    class Meta:
        ordering = ['year', 'name']

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        """Returns the url to access a particular author instance."""
        return reverse('portfolio-detail', args=[str(self.id)])

class Category(models.Model):
    name = models.CharField(max_length=200, help_text = 'Categories')

    def __str__(self):
        return self.name
