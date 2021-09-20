from rest_framework import routers, urlpatterns
from .api import HouseViewSet

router = routers.DefaultRouter()
router.register('api/houses', HouseViewSet, 'houses')

urlpatterns = router.urls