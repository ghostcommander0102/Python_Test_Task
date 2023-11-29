from django.http import JsonResponse
from rest_framework.decorators import api_view
import operator

@api_view(['POST'])
def calculate(request):
    data = request.data
    try:
        result = eval(data.get('expression'))  # Caution: using 'eval' can be dangerous
        color = 'green' if result % 2 == 0 else 'red'
        return JsonResponse({'result': result, 'color': color})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)
