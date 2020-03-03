@extends('layouts.app')
@include('admin.sidebar')
@section('content')
<div class="container">
    @include('flash-message')
    <div class="row justify-content-center">
        <div class="col-md-4 col-sm-12">
            <div class="card">
                <div class="card-header">Navigation</div>

                <div class="card-body">
                    @yield('sidebar')
                </div>
            </div>
        </div>
        <div class="col-md-8 col-sm-12">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    You are logged in!
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
