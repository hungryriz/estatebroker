@section('sidebar')
<ul>
    @foreach (Config::get('settings.admin.sidebar.navigation.links') as $link => $title)
        <li><a href="{{route($link)}}"><?php echo $title ?></a></li>
    @endforeach
</ul>
@endsection